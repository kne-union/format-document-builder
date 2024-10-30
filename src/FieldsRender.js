import React, { useState } from 'react';
import { useFormContext, GroupList, fields } from '@kne/react-form-antd';
import { Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import transform from 'lodash/transform';
import classnames from 'classnames';
import innerFields from './innerFormFields';
import useSelected from './useSelected';
import { useContext } from './context';
import style from './style.module.scss';

const FieldsRender = () => {
  const { data, getRootElement, setDeleteFields, getRenderElement, fields: customFields, deleteFields, rootElementId } = useContext();

  const currentFields = Object.assign({}, fields, innerFields, customFields);

  const { openApi } = useFormContext();

  const [activeComponent, setActiveComponent] = useState(null);

  const ref = useSelected({
    getRootElement,
    getRenderElement,
    tags: transform(
      data,
      (result, value, key) => {
        value.canEdit !== false && (result[key] = value.className);
      },
      {}
    ),
    onSelected: info => {
      setActiveComponent(info);
    },
    onCancel: () => {
      setActiveComponent(null);
    }
  });

  return (
    <div className={classnames('event-element', style['form-inner'])} ref={ref}>
      {Object.keys(data)
        .filter(name => deleteFields.indexOf(name) === -1)
        .map(name => {
          const { isArray, type, typeProps, width, height, className, canDelete, deleteButton, canEdit = true, editButton, ...props } = data[name];
          const Component = currentFields[type];

          if (!Component) {
            return null;
          }

          const render = index => {
            const isActive = activeComponent && activeComponent.currentName === name && activeComponent.currentIndex === index && canEdit;
            const node = (() => {
              const node = getRenderElement().querySelectorAll(`.${className}`)[index];
              if (!node) {
                return null;
              }
              const root = getRootElement();
              if (!root) {
                return null;
              }
              const { left: rootLeft, top: rootTop } = root?.getBoundingClientRect();
              const { left, top } = node.getBoundingClientRect();
              return {
                x: left - rootLeft + node.clientWidth,
                y: top - rootTop + node.clientHeight / 2,
                left,
                top,
                element: node,
                width: node.clientWidth,
                height: node.clientHeight
              };
            })();
            const handlerEdit = e => {
              e.stopPropagation();
              const { left } = e?.target?.getBoundingClientRect();
              const { left: nodeLeft } = node.element.getBoundingClientRect();
              const event = new PointerEvent('click', {
                bubbles: true,
                cancelable: true,
                clientX: e.clientX - (left - nodeLeft),
                clientY: e.clientY
              });
              ref.current.dispatchEvent(event);
            };

            const handlerDelete = e => {
              e.stopPropagation();
              openApi.setField({ name, value: null });
              setDeleteFields(deletedField => {
                const newDeletedField = deletedField.slice(0);
                newDeletedField.push(name);
                return newDeletedField;
              });
            };

            return (
              <div key={name + '_field_' + index}>
                <span
                  className={classnames(style['form-field'], {
                    [style['is-active']]: isActive
                  })}
                  style={
                    isActive
                      ? Object.assign({}, activeComponent.style, {
                          '--top': activeComponent.location.top + 'px',
                          '--left': activeComponent.location.left + 'px',
                          '--width': width ? width : activeComponent.location.width + 'px',
                          '--height': height ? height : activeComponent.location.height + 'px',
                          '--font-size': activeComponent.style['fontSize'],
                          '--font-weight': activeComponent.style['fontWeight'],
                          '--padding': activeComponent.style['padding'],
                          '--text-align': activeComponent.style['textAlign'],
                          '--line-height': activeComponent.style['lineHeight']
                        })
                      : {}
                  }
                  onClick={e => {
                    e.stopPropagation();
                  }}
                >
                  {isActive && <style children={`#${rootElementId} ${style['render']} .${className}${isArray ? `[data-index="${index}"]` : ''}{visibility: hidden;}`} />}
                  <Component
                    {...props}
                    {...(typeof typeProps === 'function'
                      ? Object.assign(
                          {},
                          typeProps({
                            isActive,
                            blur: () => setActiveComponent(null),
                            formApi: openApi
                          })
                        )
                      : Object.assign({}, typeProps))}
                    name={name}
                    isActive={isActive}
                  />
                </span>
                {!isActive && !activeComponent && node && (
                  <Space
                    key={name + 'opt'}
                    className={style['opt-list']}
                    style={{
                      '--left': node.x + 'px',
                      '--top': node.y + 'px'
                    }}
                  >
                    {canEdit &&
                      (typeof editButton === 'function' ? (
                        editButton({
                          onClick: handlerEdit
                        })
                      ) : (
                        <Button type="text" icon={<EditOutlined />} onClick={handlerEdit} />
                      ))}
                    {canDelete &&
                      (typeof deleteButton === 'function' ? (
                        deleteButton({
                          onClick: handlerEdit
                        })
                      ) : (
                        <Button type="text" icon={<DeleteOutlined />} onClick={handlerDelete} />
                      ))}
                  </Space>
                )}
              </div>
            );
          };

          const renderElement = getRenderElement();
          if (!renderElement) {
            return null;
          }
          if (isArray) {
            return (
              <GroupList name={name} defaultLength={renderElement.querySelectorAll(`.${className}`).length}>
                {(...groupArgs) => {
                  //这里兼容一下新老版本
                  const { index } = (groupArgs => {
                    if (typeof groupArgs[0] === 'object') {
                      return groupArgs[0];
                    }
                    const [key, { index, onRemove, length }] = groupArgs;
                    return { id: key, index, onRemove, length };
                  })(groupArgs);
                  return render(index);
                }}
              </GroupList>
            );
          }

          return render(0);
        })}
    </div>
  );
};

export default FieldsRender;
