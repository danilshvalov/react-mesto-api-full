import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { addThemeAttrs, getOnlyDOMProps } from "../utils/utils";
import { NavLink } from "react-router-dom";

const ColoredLink = React.memo((props) => {
  // contexts
  const currentTheme = React.useContext(ThemeContext);

  // classNames
  const linkClassName = addThemeAttrs({
    theme: currentTheme,
    classList: props.className,
  });

  return (
    <NavLink
      to={props.to}
      {...getOnlyDOMProps(props)}
      className={linkClassName}
    >
      {props.children}
    </NavLink>
  );
});

export default ColoredLink;
