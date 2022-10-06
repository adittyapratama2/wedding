import { Sequelize } from "sequelize";
import db from "../config/db.js";

const DataTypes = Sequelize;

const Guests = db.define(
  "guest",
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    slug: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    guest: {
      type: DataTypes.ENUM("temira", "adittya"),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.ENUM("hadir", "tidak hadir"),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default Guests;
