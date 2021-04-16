module.exports.thirdPartyLibErrorHandler = (err, req, res, next) => {
  if (err) {
    res.status(400)
      .send({
        message: 'Во время обработки запроса произошла ошибка. Проверьте правильность запроса',
      });
  } else {
    next();
  }
};

module.exports.secretKey = (process.env.NODE_ENV !== 'production' ? 'super-secret-key' : process.env.JWT_SECRET);
