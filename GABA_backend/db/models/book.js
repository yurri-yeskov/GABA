const Sequelize = require("sequelize");
const db = require("../db");

const Book = db.define(
  "book",
  {
    title: {
      type: Sequelize.STRING,
      allownull: false,
    },
    author: {
      type: Sequelize.STRING,
      allownull: false,
    },
    isbn: {
      type: Sequelize.STRING,
      allownull: false,
    },
    userId: {
      //owner id
      type: Sequelize.INTEGER,
      allownull: false,
    },
    condition: {
      /**ADDED */ /////////////////////////
      type: Sequelize.STRING,
      allownull: false,
    },

    preview_image: {
      type: Sequelize.TEXT,
      allownull: true,
      defaultValue:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkB1qK13I9DeSy79dXGjGJC5UoMbCym9ioYg&usqp=CAU",
    },
  },

  {
    timestamps: false,
  }
);

module.exports = Book;
