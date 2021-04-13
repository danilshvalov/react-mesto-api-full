import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { getOnlyDOMProps, addThemeAttrs } from "../utils/utils";

const Field = React.memo((props) => {
  // contexts
  const currentTheme = React.useContext(ThemeContext);

  // classes
  const fieldClass = addThemeAttrs({
    theme: currentTheme,
    classList: props.fieldClass,
  });
  const inputClass = addThemeAttrs({
    theme: currentTheme,
    classList: props.inputClass,
  });

  // states
  const [isValid, setValid] = React.useState(false);
  const [value, setValue] = React.useState(props.defaultValue);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isErrorVisible, setErrorVisible] = React.useState(false);

  // refs
  const inputRef = React.useRef();

  // effects
  React.useEffect(() => {
    if (props.isVisible) {
      inputRef.current.value = props.defaultValue;
      setValue(inputRef.current.value);
      setValid(inputRef.current.validity.valid);
      setErrorMessage(inputRef.current.validationMessage);
      setErrorVisible(false);
    }
  }, [props.isVisible, props.defaultValue]);
  React.useEffect(() => {
    props.onInput({ value, isValid });
  }, [value, isValid, props]);

  // handlers
  const handleInput = (evt) => {
    const target = evt.target;
    setValue(target.value);
    setValid(target.validity.valid);
    setErrorVisible(!target.validity.valid);
    setErrorMessage(target.validationMessage);
  };

  return (
    <div className={fieldClass}>
      <input
        {...getOnlyDOMProps(props)}
        className={inputClass}
        id={`${props.name}-input`}
        name={`${props.name}Input`}
        onInput={handleInput}
        defaultValue={value}
        ref={inputRef}
      />
      <span
        className={`field__error-message ${
          isErrorVisible ? "field__error-message_visible" : ""
        }`}
        id={`${props.name}-input-error`}
      >
        {errorMessage}
      </span>
    </div>
  );
});

export default Field;
