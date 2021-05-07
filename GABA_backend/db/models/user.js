const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allownull: true
    },
    username: {
        type: Sequelize.STRING,
        allownull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        is: /^[0-9a-f]{64}$/i,
        allownull: false
    },
    salt: {
        type: Sequelize.STRING,
        allownull: false
    },
    zipcode: {
        type: Sequelize.STRING,
        allownull: false
    },
    email: {
        type: Sequelize.STRING,
        allownull: true,
        isEmail: true
    }
}, {
    timestamps: false
});

module.exports = User;