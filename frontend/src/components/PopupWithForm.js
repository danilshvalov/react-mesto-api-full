import React from "react";
import Popup from "./Popup";
import Form from "./Form";
import { popupClassNames } from "../utils/constants";
import ColoredTitle from "./ColoredTitle";

function PopupWithForm({
  name,
  title,
  children,
  onClose,
  isOpen,
  onSubmit,
  formClass,
  titleClass,
  submitButton,
}) {
  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <Form
        className={`${popupClassNames.popup}__${name}-form ${formClass}`}
        method="POST"
        action="/"
        name={name}
        noValidate
        onSubmit={onSubmit}
      >
        <ColoredTitle className={titleClass}>{title}</ColoredTitle>
        {children}
        {submitButton}
      </Form>
    </Popup>
  );
}

export default PopupWithForm;
