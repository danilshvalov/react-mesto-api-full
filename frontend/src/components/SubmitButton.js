import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { getOnlyDOMProps, addThemeAttrs } from "../utils/utils";

const SubmitButton = React.memo((props) => {
  // проверка на undefined необходима для включения кнопки, если клиент не определил ее поведение
  const currentTheme = React.useContext(ThemeContext);

  const defaultClass = "submit-button button";
  const disabledClass = `submit-button_disabled`;
  const className = `${addThemeAttrs({
    theme: currentTheme,
    classList: `${defaultClass} ${props.className}`,
  })} ${props.isEnabled || props.isEnabled === undefined ? "" : disabledClass}`;

  return (
    <button {...getOnlyDOMProps(props)} className={className} type="submit">
      {props.text}
    </button>
  );
});

export default SubmitButton;
