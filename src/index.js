import React, {useRef, forwardRef, useImperativeHandle, useState, useCallback, useMemo, useEffect} from 'react';
import Form from '@kne/react-form-antd';
import style from './style.module.scss';
import TemplateRender from './TemplateRender';
import FieldsRender from './FieldsRender';
import useInitFormData from './useInitFormData';

const FormatDocumentBuilder = forwardRef((props, ref) => {
    const {template, data, isPreview, options} = Object.assign({}, props);
    const rootRef = useRef();
    const renderRef = useRef();
    const templateRenderRef = useRef();
    const templateFormRef = useRef();
    const [isMount, setIsMount] = useState(false);
    const [deleteField, setDeleteField] = useState([]);

    useEffect(()=>{
        setIsMount(true);
    },[]);

    useImperativeHandle(ref, () => {
        return {
            getRenderHtml: () => {
                return templateRenderRef.current;
            }, deleteField, getFormData: () => {
                return templateFormRef.current ? templateFormRef.current?.data : "";
            },
        };
    });

    const getRootElement = useCallback(() => rootRef.current, []);
    const getRenderElement = useCallback(() => renderRef.current, []);


    const initFormData = useInitFormData({data});

    useEffect(() => {
        const templateData = Object.assign({}, initFormData);
        const initDeleteField = [];
        Object.keys(templateData).forEach((key) => {
            if (templateData[key] === null) {
                initDeleteField.push(key);
            }
        });
        if (initDeleteField.length > 0) {
            setDeleteField((deletedField) => {
                const newDeletedField = deletedField.slice(0);
                initDeleteField.forEach((fieldName) => {
                    if (newDeletedField.indexOf(fieldName) === -1) {
                        newDeletedField.push(fieldName);
                    }
                });
                return newDeletedField;
            });
        }
    }, [initFormData]);

    if (isPreview) {
        return <TemplateRender
            templateContent={template}
            data={data}
            deleteField={deleteField}
            options={options}
            ref={templateRenderRef}
        />
    }

    return <div className={style["canvas"]} ref={rootRef} style={{width: '769px'}}>
        <Form
            ref={templateFormRef}
            data={initFormData}>
            <div className={style["render"]} ref={renderRef}>
                <TemplateRender
                    templateContent={template}
                    data={data}
                    deleteField={deleteField}
                    options={options}
                    ref={templateRenderRef}
                />
            </div>
            <FieldsRender isMount={isMount} data={data} setDeleteField={setDeleteField}
                          getRootElement={getRootElement}
                          getRenderElement={getRenderElement}/>
        </Form>
    </div>
});

export default FormatDocumentBuilder;
