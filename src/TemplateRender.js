import React, {forwardRef, useMemo, useEffect, useImperativeHandle} from 'react';
import template from "lodash/template";
import transform from "lodash/transform";
import {useFormContext} from '@kne/react-form-antd';
import useInitFormData from "./useInitFormData";

const TemplateRender = forwardRef(({templateContent, deleteField, data, options}, ref) => {
    const compiled = useMemo(() => {
        return template(templateContent);
    }, [templateContent]);
    const initFormData = useInitFormData({data});
    const formContext = useFormContext();
    const templateData = Object.assign({}, initFormData, formContext?.formData);
    const renderHtml = compiled({
        data: transform(templateData, (result, value, key) => {
            if (typeof data[key].render === "function") {
                result[key] = data[key].render(value);
            } else {
                result[key] = value;
            }
        }, {}),
        isDeletedField: (fieldName) => deleteField.indexOf(fieldName) > -1 || templateData[fieldName] === null,
        options,
    });

    useImperativeHandle(ref, () => {
        return compiled({
            data: transform(templateData, (result, value, key) => {
                if (typeof data[key].render === "function" && value) {
                    result[key] = data[key].render(value);
                } else {
                    result[key] = value;
                }
            }, {}),
            isDeletedField: (fieldName) => deleteField.indexOf(fieldName) > -1 || templateData[fieldName] === null,
            options,
        });
    });

    return (<div dangerouslySetInnerHTML={{__html: renderHtml}}/>);
});

export default TemplateRender;
