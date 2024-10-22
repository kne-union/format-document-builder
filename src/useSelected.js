import { useEffect, useRef } from "react";

const useSelected = ({
  getRootElement,
  tags,
  getRenderElement,
  onSelected,
  onCancel,
}) => {
  const tagsRef = useRef(tags);
  tagsRef.current = tags;
  const ref = useRef(null);
  useEffect(() => {
    const eventElement = ref.current;
    const handlerClick = ({ clientX, clientY, target }) => {
      const renderElement = getRenderElement();
      const rootElement = getRootElement();
      eventElement.style["pointer-events"] = "none";
      renderElement.style["pointer-events"] = "all";
      const currentClickElement = document.elementFromPoint(clientX, clientY);
      renderElement.style["pointer-events"] = "none";
      eventElement.style["pointer-events"] = "all";

      const { currentTag, currentIndex, currentName } = (() => {
        let currentTag, currentIndex, currentName;
        for (let name of Object.keys(tagsRef.current)) {
          const className = tagsRef.current[name];
          const currentClickIndex = [].findIndex.call(
            rootElement.querySelectorAll(`.${className}`),
            (dom) => {
              return dom.contains(currentClickElement);
            }
          );
          if (currentClickIndex > -1) {
            currentTag = className;
            currentIndex = currentClickIndex;
            currentName = name;
            break;
          }
        }
        return { currentTag, currentIndex, currentName };
      })();

      if (!target.classList.contains("event-element")) {
        return;
      }

      if (!currentTag) {
        onCancel && onCancel();
        return;
      }
      const currentTagElement = rootElement.querySelectorAll(`.${currentTag}`)[
        currentIndex
      ];

      const currentTagElementRect = currentTagElement.getBoundingClientRect(),
        rootElementRect = rootElement.getBoundingClientRect();
      const currentClickStyle = window.getComputedStyle(
        currentClickElement,
        null
      );
      const currentTagStyle = window.getComputedStyle(currentTagElement, null);
      if (
        currentClickStyle["font-size"] === "0px" ||
        currentClickStyle["line-height"] === "0px"
      ) {
        onCancel && onCancel();
        return;
      }

      onSelected &&
        onSelected({
          location: {
            width: currentTagElement.clientWidth,
            height: currentTagElement.clientHeight,
            left: currentTagElementRect.left - rootElementRect.left,
            top: currentTagElementRect.top - rootElementRect.top,
          },
          style: {
            fontSize: currentClickStyle["font-size"],
            fontWeight: currentClickStyle["font-weight"],
            textAlign: currentClickStyle["text-align"],
            lineHeight: currentClickStyle["line-height"],
            padding: currentTagStyle.padding,
          },
          currentElement: currentClickElement,
          currentTag,
          currentIndex,
          currentName,
        });
    };
    const handlerOuterClick = (e) => {
      !e.target &&
        getRootElement().contains(e.target) &&
        onCancel &&
        onCancel();
      //onCancel && onCancel();
    };
    eventElement.addEventListener("click", handlerClick, false);
    document.body.addEventListener("click", handlerOuterClick, true);
    window.addEventListener("resize", handlerOuterClick);
    return () => {
      eventElement.removeEventListener("click", handlerClick, false);
      document.body.removeEventListener("click", handlerOuterClick, true);
      window.removeEventListener("resize", handlerOuterClick);
    };
  }, []);
  return ref;
};

export default useSelected;
