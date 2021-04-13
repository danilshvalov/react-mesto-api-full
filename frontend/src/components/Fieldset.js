import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { addThemeAttrs, getOnlyDOMProps } from "../utils/utils";

function Fieldset(props) {
  // contexts
  const currentTheme = React.useContext(ThemeContext);

  // classes
  const fieldsetClassName = addThemeAttrs({
    theme: currentTheme,
    classList: props.className,
  });

  return (
    <div {...getOnlyDOMProps(props)} className={fieldsetClassName}>
      {props.children}
    </div>
  );
}

export default Fieldset;
