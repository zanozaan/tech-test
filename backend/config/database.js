import { Sequelize } from "sequelize";

const db = new Sequelize("kendaraan_bekas_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
