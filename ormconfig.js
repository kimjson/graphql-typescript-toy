import dotenv from "dotenv"


dotenv.config()
const nodeEnv = (process.env["NODE_ENV"] || "default").toUpperCase();

module.exports = {
  "type": process.env[`TYPEORM_CONNECTION_${nodeEnv}`],
  "host": process.env[`TYPEORM_HOST_${nodeEnv}`],
  "port": process.env[`TYPEORM_PORT_${nodeEnv}`],
  "username": process.env[`TYPEORM_USERNAME_${nodeEnv}`],
  "password": process.env[`TYPEORM_PASSWORD_${nodeEnv}`],
  "database": process.env[`TYPEORM_DATABASE_${nodeEnv}`],
  "synchronize": false,
  "logging": true,
  "entities": [
    "src/models/**/*.js"
  ],
  "migrations": [
    "src/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "src/migrations"
  }
}