import React from "react";
import {
  colorFormClassNames,
  confirmPopupClassNames,
} from "../utils/constants";
import PopupWithForm from "./PopupWithForm";
import SubmitButton from "./SubmitButton";

function ConfirmPopup({ onClose, isOpen, onCardDelete, card }) {
  // constants
  const {
    defaultText: defaultSubmitButtonText,
    loadingText: loadingSubmitButtonText,
  } = confirmPopupClassNames.submitButton;

  // states
  const [submitButtonText, setSubmitButtonText] = React.useState(
    defaultSubmitButtonText
  );

  // handlers
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSubmitButtonText(loadingSubmitButtonText);
    onCardDelete(card).finally(() => {
      setSubmitButtonText(defaultSubmitButtonText);
    });
  };
  return (
    <PopupWithForm
      {...confirmPopupClassNames.popup}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      formClass={colorFormClassNames.form}
      titleClass={colorFormClassNames.title}
      submitButton={
        <SubmitButton
          className={colorFormClassNames.submitButton}
          text={submitButtonText}
        />
      }
    />
  );
}

export default ConfirmPopup;
