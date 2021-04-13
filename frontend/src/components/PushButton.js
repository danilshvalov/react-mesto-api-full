import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { getOnlyDOMProps, addThemeAttrs } from "../utils/utils";

const PushButton = React.memo((props) => {
  const currentTheme = React.useContext(ThemeContext);

  const buttonClassName = addThemeAttrs({
    theme: currentTheme,
    classList: props.className,
  });

  return (
    <button {...getOnlyDOMProps(props)} className={buttonClassName}>
      {props.children}
    </button>
  );
});

export default PushButton;
