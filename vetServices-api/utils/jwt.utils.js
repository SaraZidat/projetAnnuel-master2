const jwt = require('jsonwebtoken');

module.exports = {
  generateTokenForVeterinaire(veterinaireData) {
    return jwt.sign({
      id: veterinaireData.id,
      mail: veterinaireData.mail,
    },
    // eslint-disable-next-line no-undef
    JWT_SIGN_SECRET,
    {
      expiresIn: '8h',
    });
  },
};
