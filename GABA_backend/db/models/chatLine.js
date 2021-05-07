const Sequelize = require('sequelize');
const db = require('../db');

const ChatLine = db.define('chatline', {
    id: {
        type: Sequelize.BIGINT,
        allownull: false,
        autoIncrement: true,
        primaryKey: true
    },
    chatId: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    lineText: {
        type: Sequelize.TEXT,
        allownull: false
    },
    time: {
        type: Sequelize.STRING,
        allownull: false
    }
}, {
    timestamps: true
});

module.exports = ChatLine;