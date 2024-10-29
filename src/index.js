import React, { useCallback, useEffect, useId, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { Provider } from './context';
import useInitFormData from '../src/useInitFormData';
import TemplateRender from './TemplateRender';
import FieldsRender from './FieldsRender';
import Form from '@kne/react-form-antd';
import style from './style.module.scss';

const FormatDocumentBuilder = forwardRef((p, ref) => {
  const props = Object.assign(
    {},
    {
      width: '769px'
    },
    p
  );
  const { data, template, options, isPreview, width, fields, formRender } = props;
  const [renderHtml, setRenderHtml] = useState('');
  const [deleteFields, setDeleteFields] = useState([]);

  const rootRef = useRef(null);
  const renderRef = useRef(null);
  const formRef = useRef(null);

  const getRootElement = useCallback(() => rootRef.current, []);
  const getRenderElement = useCallback(() => renderRef.current, []);

  const initFormData = useInitFormData({ data });

  useEffect(() => {
    const templateData = Object.assign({}, initFormData);
    const initDeleteField = [];
    Object.keys(templateData).forEach(key => {
      if (templateData[key] === null) {
        initDeleteField.push(key);
      }
    });
    if (initDeleteField.length > 0) {
      setDeleteFields(deletedField => {
        const newDeletedField = deletedField.slice(0);
        initDeleteField.forEach(fieldName => {
          if (newDeletedField.indexOf(fieldName) === -1) {
            newDeletedField.push(fieldName);
          }
        });
        return newDeletedField;
      });
    }
  }, [initFormData]);

  useImperativeHandle(ref, () => {
    return {
      getRenderHtml: () => {
        return renderHtml;
      },
      deleteFields,
      getFormData: () => {
        return formRef.current ? formRef.current?.data : {};
      }
    };
  });

  const currentId = useId();
  const rootElementId = currentId.replace(/:/g, '_');

  const renderCanvasInner = () => {
    const inner = (
      <>
        <div className={style['render']} ref={renderRef}>
          <TemplateRender />
        </div>
        <FieldsRender />
      </>
    );

    if (typeof formRender === 'function') {
      return formRender({
        formRef,
        data: initFormData,
        children: inner
      });
    }

    return (
      <Form ref={formRef} data={initFormData}>
        {inner}
      </Form>
    );
  };

  return (
    <Provider
      value={{
        renderHtml,
        setRenderHtml,
        rootElementId,
        templateContent: template,
        initFormData,
        data,
        options,
        fields,
        deleteFields,
        setDeleteFields,
        getRootElement,
        getRenderElement
      }}
    >
      {isPreview ? (
        <TemplateRender />
      ) : (
        <div id={rootElementId} className={style['canvas']} ref={rootRef} style={{ width }}>
          {renderCanvasInner()}
        </div>
      )}
    </Provider>
  );
});

export default FormatDocumentBuilder;
