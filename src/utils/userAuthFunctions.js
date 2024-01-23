const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function comparePassword(plaintextPassword, hashedPassword) {
  let doesPasswordMatch = false;
  doesPasswordMatch = await bcrypt.compare(plaintextPassword, hashedPassword);
  return doesPasswordMatch;
}

function generateJwt(userId) {
  let newJwt = jwt.sign(
    // payload
    { userId },
    // secret key
    process.env.SECRET_KEY,
    // options
    { expiresIn: "1d" }
  );
  return newJwt;
}

module.exports = {
  comparePassword,
  generateJwt,
};
