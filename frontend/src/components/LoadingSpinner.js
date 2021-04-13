import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { addThemeAttrs } from "../utils/utils";
import { loadingSpinnerClassName } from "../utils/constants";

function LoadingSpinner() {
  // contexts
  const currentTheme = React.useContext(ThemeContext);

  // classes
  const spinnerClassName = addThemeAttrs({
    theme: currentTheme,
    classList: loadingSpinnerClassName,
  });
  return <div className={spinnerClassName} />;
}
export default LoadingSpinner;
