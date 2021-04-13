import React from "react";
import Field from "./Field";
import SubmitButton from "./SubmitButton";
import Form from "./Form";
import { loginSettings } from "../utils/constants";
import ColoredTitle from "./ColoredTitle";
import Fieldset from "./Fieldset";

function Login(props) {
  // constants
  const {
    classNames,
    emailInput: emailInputSettings,
    passwordInput: passwordInputSettings,
    attributes,
  } = loginSettings;

  // states
  const [isValid, setValid] = React.useState(false);
  const [emailInput, setEmailInput] = React.useState({
    value: "",
    isValid: false,
  });
  const [passwordInput, setPasswordInput] = React.useState({
    value: "",
    isValid: false,
  });
  const [submitButtonText, setSubmitButtonText] = React.useState(
    attributes.submitButtonDefaultText
  );

  // effects
  React.useEffect(() => {
    const inputs = [emailInput, passwordInput];
    setValid(inputs.every(({ isValid }) => isValid));
  }, [passwordInput, emailInput]);

  // handlers
  const handleLogin = (evt) => {
    evt.preventDefault();
    if (isValid) {
      setSubmitButtonText(attributes.submitButtonLoadingText);
      props
        .onLogin({ email: emailInput.value, password: passwordInput.value })
        .finally(() => {
          setSubmitButtonText(attributes.submitButtonDefaultText);
        });
    }
  };

  return (
    <section className={classNames.login}>
      <div className={classNames.loginContainer}>
        <Form className={classNames.form} onSubmit={handleLogin}>
          <ColoredTitle className={classNames.title}>
            {attributes.titleText}
          </ColoredTitle>
          <Fieldset className={classNames.fieldset}>
            <Field
              {...emailInputSettings}
              onInput={setEmailInput}
              inputClass={classNames.input}
              fieldClass={classNames.field}
            />
            <Field
              {...passwordInputSettings}
              onInput={setPasswordInput}
              inputClass={classNames.input}
              fieldClass={classNames.field}
            />
          </Fieldset>
          <SubmitButton
            className={classNames.submitButton}
            text={submitButtonText}
            isEnabled={isValid}
          />
        </Form>
      </div>
    </section>
  );
}

export default Login;
