import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Field from "./Field";
import SubmitButton from "./SubmitButton";
import {
  colorFormClassNames,
  editProfilePopupSettings,
} from "../utils/constants";
import Fieldset from "./Fieldset";

function EditProfilePopup({ onClose, isOpen, onUpdateUser }) {
  // constants
  const {
    defaultText: defaultSubmitButtonText,
    loadingText: loadingSubmitButtonText,
  } = editProfilePopupSettings.submitButton;

  // contexts
  const currentUser = React.useContext(CurrentUserContext);

  // states
  const [nameInput, setNameInput] = React.useState({
    value: currentUser.name,
    isValid: false,
  });
  const [descriptionInput, setDescriptionInput] = React.useState({
    value: currentUser.about,
    isValid: false,
  });
  const [isValid, setValid] = React.useState(false);
  const [submitButtonText, setSubmitButtonText] = React.useState(
    defaultSubmitButtonText
  );

  React.useEffect(() => {
    const inputs = [nameInput, descriptionInput];
    setValid(inputs.every(({ isValid }) => isValid));
  }, [nameInput, descriptionInput]);

  // handlers
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isValid) {
      setSubmitButtonText(loadingSubmitButtonText);
      onUpdateUser({
        name: nameInput.value,
        about: descriptionInput.value,
      }).finally(() => {
        setSubmitButtonText(defaultSubmitButtonText);
      });
    }
  };

  return (
    <PopupWithForm
      {...editProfilePopupSettings.popup}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      formClass={colorFormClassNames.form}
      titleClass={colorFormClassNames.title}
      submitButton={
        <SubmitButton
          {...editProfilePopupSettings.submitButton}
          className={colorFormClassNames.submitButton}
          isEnabled={isValid}
          text={submitButtonText}
        />
      }
    >
      <Fieldset
        className={`${colorFormClassNames.fieldset} ${editProfilePopupSettings.fieldsetClassName}`}
      >
        <Field
          {...editProfilePopupSettings.nameInput}
          fieldClass={colorFormClassNames.field}
          inputClass={colorFormClassNames.input}
          onInput={setNameInput}
          isVisible={isOpen}
          defaultValue={currentUser.name ? currentUser.name : ""}
        />
        <Field
          {...editProfilePopupSettings.descriptionInput}
          fieldClass={colorFormClassNames.field}
          inputClass={colorFormClassNames.input}
          onInput={setDescriptionInput}
          isVisible={isOpen}
          defaultValue={currentUser.about ? currentUser.about : ""}
        />
      </Fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
