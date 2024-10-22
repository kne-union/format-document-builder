import React, {useEffect, useState} from 'react';
import {useFormContext, GroupList, fields} from '@kne/react-form-antd';
import useRefCallback from '@kne/use-ref-callback';
import {Button, Space} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import throttle from "lodash/throttle";
import transform from "lodash/transform";
import classnames from 'classnames';
import innerFields from './innerFormFields';
import useSelected from './useSelected';
import style from './style.module.scss';

const TRIGGER_EVENTS = ["scroll", "touchstart", "touchmove", "touchend", "pageshow", "load",];

const FieldsRender = (props) => {
    const {
        data, getRootElement, setDeleteField, getRenderElement, fields: customFields, isMount
    } = Object.assign({}, props);

    const currentFields = Object.assign({}, fields, innerFields, customFields);

    const {openApi} = useFormContext();

    const [activeComponent, setActiveComponent] = useState(null);
    const [rootLocation, setRootLocation] = useState(null);

    const computed = useRefCallback(throttle((event) => {
        const root = getRootElement();
        if (root) {
            const {left, top} = root?.getBoundingClientRect();
            console.log(left, top);
            setRootLocation({left, top});
        }
    }, 500));

    useEffect(() => {
        if (!isMount) {
            return;
        }
        computed();
        const root = getRootElement();
        TRIGGER_EVENTS.forEach((event) => {
            root.addEventListener(event, computed);
        });
        return () => {
            TRIGGER_EVENTS.forEach((event) => {
                root.removeEventListener(event, computed);
            });
        };
    }, [isMount, computed, getRootElement]);

    const ref = useSelected({
        getRootElement, getRenderElement, tags: transform(data, (result, value, key) => {
            value.canEdit !== false && (result[key] = value.className);
        }, {}), onSelected: (info) => {
            setActiveComponent(info);
        }, onCancel: () => {
            setActiveComponent(null);
        },
    });

    return (<div
        className={classnames("event-element", style["form-inner"])}
        ref={ref}
    >{Object.keys(data).map((name) => {
        const {
            isArray, type, typeProps, width, height, className, canDelete, canEdit = true, ...props
        } = data[name];
        const Component = currentFields[type];

        if (!Component) {
            return null;
        }

        const render = (index) => {
            const isActive = activeComponent && activeComponent.currentName === name && activeComponent.currentIndex === index && canEdit;
            const node = (() => {
                const node = getRenderElement().querySelectorAll(`.${className}`)[index];
                if (!node || !rootLocation) {
                    return null;
                }
                const {left: rootLeft, top: rootTop} = rootLocation;
                const {left, top} = node.getBoundingClientRect();
                return {
                    x: left - rootLeft + node.clientWidth,
                    y: top - rootTop + node.clientHeight / 2,
                    left,
                    top,
                    element: node,
                    width: node.clientWidth,
                    height: node.clientHeight,
                };
            })();
            return (<div>
                <span
                    key={name + "_field_" + index}
                    className={classnames(style["form-field"], {
                        [style["is-active"]]: isActive,
                    })}
                    style={isActive ? Object.assign({}, activeComponent.style, {
                        "--top": activeComponent.location.top + "px",
                        "--left": activeComponent.location.left + "px",
                        "--width": width ? width : activeComponent.location.width + "px",
                        "--height": height ? height : activeComponent.location.height + "px",
                        "--font-size": activeComponent.style["fontSize"],
                        "--font-weight": activeComponent.style["fontWeight"],
                        "--padding": activeComponent.style["padding"],
                        "--text-align": activeComponent.style["textAlign"],
                        "--line-height": activeComponent.style["lineHeight"],
                    }) : {}}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                  {isActive && (<style
                      children={`.${style["canvas"]} .${className}${isArray ? `[data-index="${index}"]` : ""}{visibility: hidden;}`}
                  />)}
                    <Component
                        {...props}
                        {...(typeof typeProps === "function" ? Object.assign({}, typeProps({
                            isActive, blur: () => setActiveComponent(null), formApi,
                        })) : Object.assign({}, typeProps))}
                        name={name}
                        isActive={isActive}
                    />
                </span>
                {!isActive && !activeComponent && node && (<Space
                    key={name + "opt"}
                    className={style["opt-list"]}
                    style={{
                        "--left": node.x + "px", "--top": node.y + "px",
                    }}
                >
                    {canEdit && (<Button
                        type="link"
                        icon={<EditOutlined/>}
                        onClick={(e) => {
                            e.stopPropagation();
                            const {left} = e?.target?.getBoundingClientRect();
                            const event = new PointerEvent("click", {
                                bubbles: true,
                                cancelable: true,
                                clientX: e.clientX - (left - node.left),
                                clientY: e.clientY,
                            });

                            ref.current.dispatchEvent(event);
                        }}
                    />)}
                    {canDelete && (<Button
                        type="link"
                        icon={<DeleteOutlined/>}
                        onClick={(e) => {
                            e.stopPropagation();
                            openApi.setField({name, value: null});
                            setDeleteField((deletedField) => {
                                const newDeletedField = deletedField.slice(0);
                                newDeletedField.push(name);
                                return newDeletedField;
                            });
                            computed();
                        }}
                    />)}
                </Space>)}
            </div>);
        };

        const renderElement = getRenderElement();
        if (!renderElement) {
            return null;
        }

        if (isArray) {
            return (<GroupList
                name={name}
                defaultLength={renderElement.querySelectorAll(`.${className}`).length}
            >
                {(key, {index}) => render(index)}
            </GroupList>);
        }

        return render(0);
    })}</div>);
};

export default FieldsRender;
