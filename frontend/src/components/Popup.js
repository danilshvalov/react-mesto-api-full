import React from "react";
import PushButton from "./PushButton";
import { popupClassNames } from "../utils/constants";

function Popup({ name, children, onClose, isOpen }) {
  // constants
  const escapeKeyCode = "Escape";

  // refs
  const popupWrapperRef = React.useRef();
  const popupContainerRef = React.useRef();

  // handlers

  const handleClose = (evt) => {
    if (
      evt.target === popupWrapperRef.current ||
      evt.target === popupContainerRef.current
    ) {
      onClose();
    }
  };

  // effects
  React.useEffect(() => {
    const escapeButtonHandler = (evt) => {
      if (evt.key === escapeKeyCode) {
        onClose();
        document.removeEventListener("keydown", escapeButtonHandler);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", escapeButtonHandler);
    }
  }, [isOpen, onClose]);
  return (
    <div
      className={`${popupClassNames.popup} ${
        popupClassNames.popup
      }_type_${name} ${isOpen ? popupClassNames.popupOpenedClass : ""}`}
      ref={popupWrapperRef}
      onClick={handleClose}
    >
      <div className={popupClassNames.container} ref={popupContainerRef}>
        {children}
        <PushButton className={popupClassNames.closeButton} onClick={onClose} />
      </div>
    </div>
  );
}

export default Popup;
