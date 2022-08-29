require("dotenv").config({ path: ".env.local" });

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/form_submit_demo`,
  migrations: {
    directory: "db/migrations",
  },
  seeds: {
    directory: "db/seeds",
  },
};
