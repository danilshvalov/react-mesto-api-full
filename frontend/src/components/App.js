import React from 'react';
import {
  Redirect, Route, Switch, useHistory,
} from 'react-router-dom';

import {linkPaths, loginSettings, registerSettings} from '../utils/constants';
import auth from '../utils/auth';
import api from '../utils/api';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import MessagePopup from './MessagePopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import LoadingSpinner from './LoadingSpinner';
import ConfirmPopup from './ConfirmPopup';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import ThemeContext from '../contexts/ThemeContext';
import {addThemeAttrs} from '../utils/utils';
import * as theme from '../utils/theme';
import Login from './Login';
import InfoTooltip from './InfoTooltip';

function App() {
  // states
  const [isAppLoading, setIsAppLoading] = React.useState(true);
  const [isDOMLoading, setDOMLoading] = React.useState(true);
  const [isApiDataLoading, setApiDataLoading] = React.useState(true);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false,
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [isMessagePopupOpen, setMessagePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = React.useState(
    false,
  );
  const [selectedCard, setSelectedCard] = React.useState();
  const [popupMessage, setPopupMessage] = React.useState('');
  const [infoTooltipData, setInfoTooltipData] = React.useState({
    message: '',
    redirectPath: '',
  });
  const [isActionSuccess, setActionSuccess] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    about: '',
    avatar: '',
    _id: '',
  });
  const [email, setEmail] = React.useState('');
  const [currentTheme, setCurrentTheme] = React.useState(theme.getUserTheme());
  const [cards, setCards] = React.useState([]);
  const [
    cardCandidateForDeletion,
    setCardCandidateForDeletion,
  ] = React.useState();
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();

  document.addEventListener('DOMContentLoaded', () => {
    setDOMLoading(false);
  });

  // functions
  const closeMessagePopup = () => {
    setMessagePopupOpen(false);
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmPopupOpen(false);
    setImagePopupOpen(false);
  };

  const openInfoTooltip = ({message, redirectPath, isSuccess}) => {
    setActionSuccess(isSuccess);
    setInfoTooltipData({message, redirectPath});
    setInfoTooltipPopupOpen(true);
  };

  // auth-handlers
  const handleLogin = (data) => auth
    .authorize(data)
    .then(() => {
      setLoggedIn(true);
      setEmail(data.email);
      openInfoTooltip({
        message: loginSettings.attributes.successMessage,
        isSuccess: true,
      });
      history.push(linkPaths.mainPage);
    })
    .catch((errorMessage) => {
      openInfoTooltip({message: errorMessage, isSuccess: false});
    });

  const handleRegister = (data) => auth
    .register(data)
    .then(() => {
      openInfoTooltip({
        message: registerSettings.attributes.successMessage,
        redirectPath: linkPaths.loginPage,
        isSuccess: true,
      });
    })
    .catch((errorMessage) => {
      setActionSuccess(false);
      openInfoTooltip({
        message: errorMessage,
        isSuccess: false,
      });
    });

  const handleSignOut = () => {
    auth.logout();
    setLoggedIn(false);
    history.push(linkPaths.loginPage);
  };

  // api handlers
  const handleApiError = (promise, callback) => promise
    .then((data) => callback(data))
    .catch((error) => {
      if (typeof error === 'string' && error.includes('401')) {
        return; // если ошибка доступа - молчим и переводим на другую страничку
      }
      if (error instanceof TypeError) {
        setPopupMessage(
          'Потеряно соединение с сервером, повторите попытку позднее',
        );
      } else if (typeof error === 'string') {
        setPopupMessage(error);
      } else {
        setPopupMessage('Непредвиденная ошибка, повторите попытку позднее');
      }
      setMessagePopupOpen(true);
    });
  const handleUpdateUser = (data) => handleApiError(api.setUserInfo(data), (userInfo) => {
    setCurrentUser(userInfo);
    setEditProfilePopupOpen(false);
  });
  const handleAddPlace = (data) => handleApiError(api.addPlace(data), (newCard) => {
    setCards([newCard, ...cards]);
    setAddPlacePopupOpen(false);
  });
  const handleUpdateAvatar = (data) => handleApiError(api.changeAvatar(data.avatar), ({avatar}) => {
    currentUser.avatar = avatar;
    setEditAvatarPopupOpen(false);
  });
  const handleInfoTooltipPopupClose = (redirectPath) => {
    setInfoTooltipPopupOpen(false);
    if (redirectPath) {
      history.push(redirectPath);
    }
  };

  // button-handlers
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };
  const handleThemeSwitch = () => {
    if (currentTheme === 'dark') {
      setCurrentTheme('light');
    } else {
      setCurrentTheme('dark');
    }
  };

  // ---------------------------------------------------------------

  // card-handlers
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setImagePopupOpen(true);
  };
  const handleCardLike = (card) => {
    const isLiked = card.likes.some((id) => id === currentUser._id);
    handleApiError(api.changeLikeCardStatus(card._id, !isLiked), (newCard) => {
      setCards(
        cards.map((oldCard) => (oldCard._id === card._id ? newCard : oldCard)),
      );
    });
  };
  const handleCardDeleteClick = (card) => {
    setCardCandidateForDeletion(card);
    setConfirmPopupOpen(true);
  };
  const handleCardDelete = (card) => handleApiError(api.deleteCard(card._id), () => {
    setCards(cards.filter((oldCard) => oldCard._id !== card._id));
    setConfirmPopupOpen(false);
  });
  // ---------------------------------------------------------------

  // effects
  React.useEffect(() => {
    const loadApiData = () => {
      if (history.location.pathname === linkPaths.mainPage) {
        handleApiError(
          Promise.all([api.getUserInfo(), api.getInitialCards()]),
          (result) => {
            const [userInfo, initialCards] = result;
            setCurrentUser(userInfo);
            setCards(initialCards);
            setApiDataLoading(false);
          },
        );
      } else {
        setApiDataLoading(false);
      }
    };

    const handleTokenCheck = () => {
      auth
        .checkToken()
        .then((res) => {
          setLoggedIn(true);
          setEmail(res.email);
          loadApiData();
        })
        .catch(() => {
          history.push(linkPaths.loginPage);
          setApiDataLoading(false);
          setLoggedIn(false);
        });
    };

    handleTokenCheck();
  }, [isLoggedIn, history]);

  React.useEffect(() => {
    setIsAppLoading(isApiDataLoading || isDOMLoading);
  }, [isApiDataLoading, isDOMLoading]);

  React.useEffect(() => {
    theme.updateUserTheme(currentTheme);
  }, [currentTheme]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ThemeContext.Provider value={currentTheme}>
        <div
          className={addThemeAttrs({theme: currentTheme, classList: 'page'})}
        >
          <Header
            onThemeSwitch={handleThemeSwitch}
            onSignOut={handleSignOut}
            email={email}
          />
          {isAppLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <Switch>
                <ProtectedRoute
                  exact
                  path={linkPaths.mainPage}
                  loggedIn={isLoggedIn}
                  cards={cards}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick}
                  onCardClick={handleCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDeleteClick}
                  component={Main}
                />
                <Route path={linkPaths.loginPage}>
                  <Login onLogin={handleLogin} />
                </Route>
                <Route path={linkPaths.registerPage}>
                  <Register onRegister={handleRegister} />
                </Route>
                <Route path="*">
                  {isLoggedIn ? (
                    <Redirect to={linkPaths.mainPage} />
                  ) : (
                    <Redirect to={linkPaths.loginPage} />
                  )}
                </Route>
              </Switch>
              <Footer />

              <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
              />
              <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlace}
              />
              <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
              />
              <ImagePopup
                {...selectedCard}
                isOpen={isImagePopupOpen}
                onClose={closeAllPopups}
              />
              <MessagePopup
                isOpen={isMessagePopupOpen}
                onClose={closeMessagePopup}
                message={popupMessage}
              />
              <ConfirmPopup
                card={cardCandidateForDeletion}
                onCardDelete={handleCardDelete}
                isOpen={isConfirmPopupOpen}
                onClose={closeAllPopups}
              />
              <InfoTooltip
                isOpen={isInfoTooltipPopupOpen}
                onClose={handleInfoTooltipPopupClose}
                message={infoTooltipData.message}
                redirectPath={infoTooltipData.redirectPath}
                isSuccess={isActionSuccess}
              />
            </>
          )}
        </div>
      </ThemeContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
