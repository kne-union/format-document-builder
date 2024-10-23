import classnames from 'classnames';
import React, { useState, useRef, useEffect } from 'react';
import { hooks } from '@kne/react-form-antd';
import calculateNodeHeight from './calculateNodeHeight';

const InputField = ({ onChange, triggerValidate, value, isActive, style, className }) => {
  useEffect(() => {
    isActive && ref.current.focus();
  }, [isActive]);
  const ref = useRef();
  return (
    <input
      ref={ref}
      style={Object.assign({}, style, {
        border: 'none',
        outline: 'none',
        display: 'block'
      })}
      className={classnames(className, 'react-form__field-component')}
      value={value || ''}
      onChange={onChange}
      onBlur={triggerValidate}
    />
  );
};

const TextAreaField = ({ onChange, triggerValidate, value, style, isActive, className, ...props }) => {
  const [calcStyle, setCalcStyle] = useState({});
  const ref = useRef();
  useEffect(() => {
    const callback = () => {
      isActive && setCalcStyle(calculateNodeHeight(ref.current));
    };
    callback();
    const resizeObserver = new MutationObserver(callback);
    resizeObserver.observe(ref.current, { subtree: true, childList: true });
    return () => {
      resizeObserver.disconnect();
    };
  }, [isActive]);

  useEffect(() => {
    isActive && ref.current.focus();
  }, [isActive]);
  return (
    <textarea
      ref={ref}
      style={Object.assign(
        {},
        style,
        {
          border: 'none',
          outline: 'none',
          display: 'block',
          resize: 'none'
        },
        calcStyle
      )}
      className={classnames(className, 'react-form__field-component')}
      value={value || ''}
      onChange={e => {
        onChange(e.target.value);
      }}
      onBlur={triggerValidate}
    />
  );
};

const withField = WrappedComponent => props => {
  const { useField } = hooks;
  const fieldProps = useField(props);
  return <WrappedComponent {...Object.assign({}, props, fieldProps)} />;
};

const output = {
  Input: withField(InputField),
  TextArea: withField(TextAreaField)
};
export default output;
