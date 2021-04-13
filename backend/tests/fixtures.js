module.exports.correctUser = {
  name: 'CorrectName',
  about: 'CorrectAbout',
  avatar: 'https://correct-avatar.com',
  email: 'correct@email.com',
  password: 'CorrectPassword',
};

module.exports.incorrectEmails = ['incorrect.email.com', 'incorrect@email', '@email.com'];
module.exports.incorrectNames = ['', '1', '1234567890123456789012345678901234567890']; // 2-30 символов
module.exports.incorrectAbout = ['', '1', '1234567890123456789012345678901234567890']; // те же требования
module.exports.incorrectLinks = ['http//google.com', 'httpss://google.com', 'http:\\\\google.com'];
