const Sequelize = require('sequelize');
const db = require('../db');

const Chat = db.define('chat', {
    userOneId: {
        type: Sequelize.INTEGER,
        allownull: false
    },
    userTwoId: {
        type: Sequelize.INTEGER,
        allownull: false
    }
}, {
    timestamps: false
});

module.exports = Chat;