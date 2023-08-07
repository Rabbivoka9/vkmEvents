import { DataTypes } from "sequelize";
import db from "../database.js";

const Inviter = db.define("Inviter", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  table: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Inviter;


