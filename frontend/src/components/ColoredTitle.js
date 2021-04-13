import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { addThemeAttrs, getOnlyDOMProps } from "../utils/utils";

const ColoredTitle = React.memo((props) => {
  // contexts
  const currentTheme = React.useContext(ThemeContext);

  // classNames
  const titleClassName = addThemeAttrs({
    theme: currentTheme,
    classList: props.className,
  });
  return (
    <h2 {...getOnlyDOMProps(props)} className={titleClassName}>
      {props.children}
    </h2>
  );
});

export default ColoredTitle;
