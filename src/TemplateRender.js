import React, { useEffect, useMemo, useRef } from 'react';
import { useContext } from './context';
import { useFormContext } from '@kne/react-form-antd';
import transform from 'lodash/transform';
import template from 'lodash/template';
import useRefCallback from '@kne/use-ref-callback';
import { isEmpty } from '@kne/is-empty';

const TemplateRender = () => {
  const { setRenderHtml, templateContent, initFormData, data, options, deleteFields, setRenderIsMount } = useContext();
  const formContext = useFormContext();
  const templateData = Object.assign({}, initFormData, formContext?.formData);
  const ref = useRef(null);
  const compiled = useMemo(() => {
    return typeof templateContent === 'function' ? templateContent : template(templateContent);
  }, [templateContent]);

  const renderHtml = compiled({
    data: transform(
      templateData,
      (result, value, key) => {
        if (typeof data[key].render === 'function') {
          result[key] = data[key].render(value);
        } else {
          result[key] = value;
        }
        if (isEmpty(result[key])) {
          result[key] = initFormData[key];
        }
      },
      {}
    ),
    options: Object.assign({}, options, { isDeletedField: fieldName => deleteFields.indexOf(fieldName) > -1 || templateData[fieldName] === null })
  });

  const handlerChange = useRefCallback(setRenderHtml);

  useEffect(() => {
    setRenderIsMount(true);
  }, []);

  useEffect(() => {
    const callback = () => {
      handlerChange(ref.current.innerHTML);
    };
    const observer = new MutationObserver(callback);
    observer.observe(ref.current, { childList: true, subtree: true });
  }, [handlerChange]);

  return <div dangerouslySetInnerHTML={{ __html: renderHtml }} ref={ref} />;
};

export default TemplateRender;
