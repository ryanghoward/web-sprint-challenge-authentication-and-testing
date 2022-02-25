module.exports = {
  BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 2,
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 9000,
  JWT_SECRET: process.env.JWT_SECRET || "fallback",
};
