class Auth {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _errorIdentifier(code, message) {
    return `${message}. Код ошибки: ${code}`;
  }

  sendRequest({
    path,
    method = 'GET',
    headers,
    body,
    errorMessage,
    errorIdentifier,
  }) {
    return fetch(new URL(path, this._baseUrl), {
      method,
      headers: {...this._headers, ...headers},
      body,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // проверяем, есть ли кастомный идентификатор ошибок
      // если есть - проверим, смог ли обработать ошибку
      if (errorIdentifier && errorIdentifier(res.status)) {
        return Promise.reject(errorIdentifier(res.status));
      }
      return Promise.reject(this._errorIdentifier(res.status, errorMessage));
    });
  }

  register({email, password}) {
    const errorIdentifier = (code) => {
      if (code === 400) {
        return 'Такой пользователь уже существует';
      }
    };

    return this.sendRequest({
      path: 'signup',
      method: 'POST',
      body: JSON.stringify({email, password}),
      errorMessage: 'Не удалось зарегистрировать пользователя',
      errorIdentifier,
    });
  }

  authorize({email, password}) {
    const errorIdentifier = (code) => {
      if (code === 400) {
        return 'Не все поля были заполнены';
      } if (code === 401) {
        return 'Неверный email или пароль';
      }
    };

    return this.sendRequest({
      path: 'signin',
      method: 'POST',
      body: JSON.stringify({email, password}),
      errorMessage: 'Не удалось авторизовать пользователя',
      errorIdentifier,
    });
  }

  checkToken(token) {
    const errorIdentifier = (code) => {
      if (code === 400) {
        return 'Токен авторизации не был передан или передан в неверном формате';
      } if (code === 401) {
        return 'Некорректный токен авторизации';
      }
    };

    return this.sendRequest({
      path: 'users/me',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      errorMessage: 'Не удалось проверить токен',
      errorIdentifier,
    });
  }
}

const auth = new Auth({
  baseUrl: 'https://auth.nomoreparties.co/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default auth;
