const Pool = require("pg").Pool;
export const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgrestest",
  port: 5432
});
//('postgres://postgres:postgrestest@localhost:5432/postgres')
