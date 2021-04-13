import React from "react";
import Field from "./Field";
import Fieldset from "./Fieldset";
import PopupWithForm from "./PopupWithForm";
import SubmitButton from "./SubmitButton";
import { addPlacePopupSettings, colorFormClassNames } from "../utils/constants";

function AddPlacePopup({ onClose, isOpen, onAddPlace }) {
  // constants
  const {
    defaultText: defaultSubmitButtonText,
    loadingText: loadingSubmitButtonText,
  } = addPlacePopupSettings.submitButton;

  // states
  const [titleInput, setTitleInput] = React.useState({
    value: "",
    isValid: false,
  });
  const [linkInput, setLinkInput] = React.useState({
    value: "",
    isValid: false,
  });
  const [isValid, setValid] = React.useState(false);
  const [submitButtonText, setSubmitButtonText] = React.useState(
    defaultSubmitButtonText
  );

  // effects
  React.useEffect(() => {
    const inputs = [titleInput, linkInput];
    setValid(inputs.every(({ isValid }) => isValid));
  }, [titleInput, linkInput]);

  // handlers
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      setSubmitButtonText(loadingSubmitButtonText);
      onAddPlace({ name: titleInput.value, link: linkInput.value }).finally(
        () => {
          setSubmitButtonText(defaultSubmitButtonText);
        }
      );
    }
  };

  return (
    <PopupWithForm
      {...addPlacePopupSettings.popup}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      formClass={colorFormClassNames.form}
      titleClass={colorFormClassNames.title}
      submitButton={
        <SubmitButton
          {...addPlacePopupSettings.submitButton}
          className={colorFormClassNames.submitButton}
          isEnabled={isValid}
          text={submitButtonText}
        />
      }
    >
      <Fieldset
        className={`${colorFormClassNames.fieldset} ${addPlacePopupSettings.fieldsetClassName}`}
      >
        <Field
          {...addPlacePopupSettings.titleInput}
          fieldClass={colorFormClassNames.field}
          inputClass={colorFormClassNames.input}
          onInput={setTitleInput}
          isVisible={isOpen}
        />
        <Field
          {...addPlacePopupSettings.linkInput}
          fieldClass={colorFormClassNames.field}
          inputClass={colorFormClassNames.input}
          onInput={setLinkInput}
          isVisible={isOpen}
        />
      </Fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
