import React from "react";
import ThemeContext from "../contexts/ThemeContext";
import { footerClassNames } from "../utils/constants";
import { addThemeAttrs } from "../utils/utils";

function Footer() {
  // contexts
  const currentTheme = React.useContext(ThemeContext);

  // classes
  const footerClassName = addThemeAttrs({
    theme: currentTheme,
    classList: footerClassNames.footer,
  });

  return (
    <footer className={footerClassName}>
      <p className={footerClassNames.copyright}>© 2020 — 2021 Mesto Russia</p>
    </footer>
  );
}

export default Footer;
