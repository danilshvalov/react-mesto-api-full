export const DOMProps = [
  "abbr",
  "accept",
  "acceptCharset",
  "accessKey",
  "action",
  "allowFullScreen",
  "allowTransparency",
  "alt",
  "async",
  "autoComplete",
  "autoFocus",
  "autoPlay",
  "cellPadding",
  "cellSpacing",
  "challenge",
  "charset",
  "checked",
  "cite",
  "class",
  "className",
  "cols",
  "colSpan",
  "command",
  "content",
  "contentEditable",
  "contextMenu",
  "controls",
  "coords",
  "crossOrigin",
  "data",
  "dateTime",
  "default",
  "defer",
  "dir",
  "disabled",
  "download",
  "draggable",
  "dropzone",
  "encType",
  "for",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "frameBorder",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hrefLang",
  "htmlFor",
  "httpEquiv",
  "icon",
  "id",
  "inputMode",
  "isMap",
  "itemId",
  "itemProp",
  "itemRef",
  "itemScope",
  "itemType",
  "kind",
  "label",
  "lang",
  "list",
  "loop",
  "manifest",
  "max",
  "maxLength",
  "media",
  "mediaGroup",
  "method",
  "min",
  "minLength",
  "multiple",
  "muted",
  "name",
  "noValidate",
  "open",
  "optimum",
  "pattern",
  "ping",
  "placeholder",
  "poster",
  "preload",
  "radioGroup",
  "readOnly",
  "rel",
  "required",
  "role",
  "rows",
  "rowSpan",
  "sandbox",
  "scope",
  "scoped",
  "scrolling",
  "seamless",
  "selected",
  "shape",
  "size",
  "sizes",
  "sortable",
  "span",
  "spellCheck",
  "src",
  "srcDoc",
  "srcSet",
  "start",
  "step",
  "style",
  "tabIndex",
  "target",
  "title",
  "translate",
  "type",
  "typeMustMatch",
  "useMap",
  "value",
  "width",
  "wmode",
  "wrap",
  "onCopy",
  "onCut",
  "onPaste",
  "onLoad",
  "onError",
  "onWheel",
  "onScroll",
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onFocus",
  "onBlur",
  "onChange",
  "onInput",
  "onSubmit",
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onSelect",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionEnd",
];

export const buttonClassNames = {
  deleteButton: "button delete-button",
  submitButton: "button submit-button",
  addButton: "button add-button",
  likeButton: "button like-button",
  closeButton: "button close-button",
  editButton: "button edit-button",
};

export const transparentFormClassNames = {
  form: "form transparent-form",
  input: "field__input transparent-form__input",
  fieldset: "fieldset, transparent-form__fieldset",
  field: "field transparent-form__field",
  submitButton: "submit-button transparent-form__submit-button",
};

export const colorFormClassNames = {
  form: "form color-form",
  input: "field__input color-form__input",
  fieldset: "fieldset color-form__fieldset",
  field: "field color-form__field",
  title: "color-form__title",
  submitButton: "submit-button color-form__submit-button",
};

export const registerSettings = {
  classNames: {
    register: "register",
    registerContainer: "register__container",
    form: "form transparent-form register__form",
    fieldset: "fieldset transparent-form__fieldset",
    input: "field__input transparent-form__input register__input",
    field: "field transparent-form__field register__field",
    title: "transparent-form__title register__title",
    submitButton:
      "submit-button transparent-form__submit-button register__submit-button",
    subtextContainer: "transparent-form__subtext register__subtext-container",
    link: "transparent-form__link",
  },
  emailInput: {
    name: "email",
    type: "email",
    defaultValue: "",
    placeholder: "Email",
    required: true,
  },
  passwordInput: {
    name: "password",
    type: "password",
    defaultValue: "",
    placeholder: "Пароль",
    required: true,
  },
  attributes: {
    titleText: "Регистрация",
    submitButtonDefaultText: "Зарегистрироваться",
    submitButtonLoadingText: "Регистрируем...",
    successMessage: "Вы успешно зарегистрировались!"
  },
};

export const loginSettings = {
  classNames: {
    login: "login",
    loginContainer: "login__container",
    form: "form transparent-form login__form",
    fieldset: "fieldset transparent-form__fieldset",
    input: "field__input transparent-form__input login__input",
    field: "field transparent-form__field login__field",
    title: "transparent-form__title login__title",
    submitButton:
      "submit-button transparent-form__submit-button login__submit-button",
  },
  emailInput: {
    name: "email",
    type: "email",
    defaultValue: "",
    placeholder: "Email",
    required: true,
  },
  passwordInput: {
    name: "password",
    type: "password",
    defaultValue: "",
    placeholder: "Пароль",
    required: true,
  },
  attributes: {
    titleText: "Вход",
    submitButtonDefaultText: "Войти",
    submitButtonLoadingText: "Входим...",
    successMessage: "Вы успешно авторизовались!"
  },
};

export const addPlacePopupSettings = {
  popup: {
    name: "add-element",
    title: "Новое место",
  },
  submitButton: {
    defaultText: "Создать",
    loadingText: "Создаем...",
  },
  titleInput: {
    name: "title",
    type: "text",
    defaultValue: "",
    placeholder: "Название",
    minLength: "2",
    maxLength: "30",
    required: true,
  },
  linkInput: {
    name: "link",
    type: "url",
    defaultValue: "",
    placeholder: "Ссылка на картинку",
    required: true,
  },
  fieldsetClassName: "popup__add-element-fieldset"
};

export const editProfilePopupSettings = {
  popup: {
    name: "edit-profile",
    title: "Редактировать профиль",
  },
  submitButton: {
    defaultText: "Сохранить",
    loadingText: "Сохранение...",
  },
  nameInput: {
    name: "name",
    type: "text",
    placeholder: "Имя",
    minLength: "2",
    maxLength: "40",
    required: true,
  },
  descriptionInput: {
    name: "job",
    type: "text",
    placeholder: "Деятельность",
    required: true,
    minLength: "2",
    maxLength: "200",
  },
  fieldsetClassName: "popup__edit-profile-fieldset"
};

export const editAvatarPopupSettings = {
  popup: {
    name: "change-avatar",
    title: "Обновить аватар",
  },
  submitButton: {
    defaultText: "Сохранить",
    loadingText: "Сохранение...",
  },
  avatarInput: {
    name: "avatar",
    type: "url",
    defaultValue: "",
    placeholder: "Ссылка на картинку",
    required: true,
  },
  fieldsetClassName: "popup__change-avatar-fieldset"
};

export const infoTooltipClassNames = {
  infoTooltip: "info-tooltip",
  icon: "info-tooltip__icon",
  text: "info-tooltip__text",
};

export const imagePopupClassNames = {
  picture: "picture popup__picture",
  image: "picture__image",
  description: "picture__description",
};

export const messagePopupClassNames = {
  name: "message",
  container: "message-box popup__message-box",
  textContainer: "message-box__text",
  closeButton: "button button_small-size button_invert-color close-button popup__close-button",
};

export const confirmPopupClassNames = {
  popup: {
    name: "confirm",
    title: "Вы уверены?",
  },
  submitButton: {
    defaultText: "Да",
    loadingText: "Удаление...",
  },
};

export const headerClassNames = {
  header: "header",
  logo: "header__logo",
  container: "header__container",
  item: "header__item"
};

export const navbarClassNames = {
  navbar: "navbar",
  link: "navbar__link",
  dimLink: "navbar__link navbar__link_type_dim",
  item: "navbar__item",
  container: "navbar__container",
  email: "navbar__email"
};

export const cardClassNames = {
  element: "element",
  image: "element__image",
  deleteButton: "button delete-button element__delete-button",
  deleteButtonHiddenClass: "delete-button_hidden",
  likeButton: "button like-button element__like-button",
  likeButtonActiveClass: "like-button_active",
  sideBar: "element__sidebar",
  title: "element__title",
  likeContainer: "element__like-container",
  likeCount: "element__like-count",
};

export const popupClassNames = {
  popup: "popup",
  popupOpenedClass: "popup_opened",
  container: "popup__container",
  closeButton: "button close-button popup__close-button"
}

export const footerClassNames = {
  footer: "footer",
  copyright: "footer__copyright"
}

export const loadingSpinnerClassName = "loading-spinner";

export const linkPaths = {
  loginPage: "/sign-in",
  mainPage: "/",
  registerPage: "/sign-up",
};

export const themeSwitcherClassNames = {
  themeButton: "button theme-button",
  themeSwitcher: "theme-switcher"
};