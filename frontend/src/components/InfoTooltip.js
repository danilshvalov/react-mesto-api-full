import React from "react";
import Popup from "./Popup";
import successLogo from "../images/success.svg";
import failureLogo from "../images/failure.svg";
import { infoTooltipClassNames } from "../utils/constants";
import { addThemeAttrs } from "../utils/utils";
import ThemeContext from "../contexts/ThemeContext";

function InfoTooltip(props) {
  // contexts
  const currentTheme = React.useContext(ThemeContext);

  // classes
  const infoTooltipClassName = addThemeAttrs({
    theme: currentTheme,
    classList: infoTooltipClassNames.infoTooltip,
  });

  // handlers
  const handleClose = () => {
    props.onClose(props.redirectPath);
  };
  return (
    <Popup
      name={infoTooltipClassNames.infoTooltip}
      isOpen={props.isOpen}
      onClose={handleClose}
    >
      <div className={infoTooltipClassName}>
        {props.isSuccess ? (
          <img
            className={infoTooltipClassNames.icon}
            src={successLogo}
            alt="Успех"
          />
        ) : (
          <img
            className={infoTooltipClassNames.icon}
            src={failureLogo}
            alt="Ошибка"
          />
        )}
        <p className={infoTooltipClassNames.text}>{props.message}</p>
      </div>
    </Popup>
  );
}

export default InfoTooltip;
