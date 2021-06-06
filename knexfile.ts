// tslint:disable-next-line: no-var-requires
require("ts-node/register");
import dotenv from "dotenv";
dotenv.config();



module.exports = {

  development: {
    client: "postgresql",
    connection: {
      host: '127.0.0.1',
      database: process.env.dev_database_url,
      user: process.env.db_username,
      password: process.env.db_password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations'

    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
