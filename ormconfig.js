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
  "synchronize": process.env[`TYPEORM_SYNCHRONIZE_${nodeEnv}`],
  "logging": process.env[`TYPEORM_LOGGING_${nodeEnv}`],
  "entities": [
    process.env[`TYPEORM_ENTITIES_${nodeEnv}`]
  ],
  "migrations": [
    process.env[`TYPEORM_MIGRATIONS_${nodeEnv}`]
  ]
}