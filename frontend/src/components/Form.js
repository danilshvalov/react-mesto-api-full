import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { addThemeAttrs, getOnlyDOMProps } from "../utils/utils";

function Form(props) {
  // contexts
  const currentTheme = React.useContext(ThemeContext);

  // classes
  const formClassName = addThemeAttrs({
    theme: currentTheme,
    classList: props.className,
  });
  return (
    <form {...getOnlyDOMProps(props)} className={formClassName}>
      {props.children}
    </form>
  );
}

export default Form;
