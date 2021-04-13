import React from "react";
import defaultAvatar from "../images/avatar.svg";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ThemeContext from "../contexts/ThemeContext";
import PushButton from "./PushButton";

function Main({
  cards,
  onEditAvatar,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
  onEditProfile,
}) {
  // contexts
  const currentUser = React.useContext(CurrentUserContext);
  const currentTheme = React.useContext(ThemeContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img
            className="profile__avatar"
            src={currentUser.avatar || defaultAvatar}
            alt="Аватар пользователя"
          />
          <PushButton
            className="button profile__edit-avatar-button"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__text">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <PushButton
              className="button edit-button profile__edit-button"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <PushButton
          className="button add-button profile__add-button"
          onClick={onAddPlace}
        />
      </section>

      <section className={`elements elements_theme_${currentTheme}`}>
        {cards.map((data) => {
          return (
            <Card
              card={data}
              key={data._id}
              onCardLike={onCardLike}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
