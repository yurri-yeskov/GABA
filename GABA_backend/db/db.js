const Sequelize = require("sequelize");
const { dbURL } = require("../config");
const dbName = require("../functions/dbName");

//const db = new Sequelize(dbURL, {logging: false});
const db = new Sequelize(dbName, "postgres", "Equbqkxl1738", {
  dialect: "postgres",
  port: 5432,
  define: {
    timestamps: false,
  },
  logging: false,
});

module.exports = db;
