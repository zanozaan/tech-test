import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Product = db.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    merk_product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_product: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jumlah_stok: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    keterangan: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Product;

(async () => {
  await db.sync();
})();
