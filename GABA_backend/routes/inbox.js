const express = require('express');
const router = express.Router();

const {Chat, ChatLine} = require('../db/models');
const {Op} = require('sequelize');

//get all chats where id is the logged in user
router.get('/:id', (request, response, next) => {
    Chat.findAll({
        where: {
            [Op.or]: [{
                userOneId: request.params.id
            }, {
                userTwoId: request.params.id
            }]
        }
    })
    .then(chats => response.status(200).json(chats))
    .catch(err => next(err))
})

router.post('/findchatbytwousers', (request, response, next) => {
    let userOneId = request.body.userOneId
    let userTwoId = request.body.userTwoId
    Chat.findOne({
        where: {
            [Op.or]: [{
                userOneId,
                userTwoId
            }, {
                userOneId: userTwoId,
                userTwoId: userOneId
            }]
        }
    })
    .then(chat => {
        if (chat) {
            response.status(200).json(chat)
        }
        else {
            response.status(200).send(null)
        }
    })
    .catch(err => next(err))
})

router.post('/findchat', (request, response, next) => {
    let conversationId = request.body.conversationId
    Chat.findByPk(conversationId)
    .then(chats => response.status(200).json(chats))
    .catch(err => next(err))
})

//params.id is chat id
router.get('/chatlines/:id', (request, response, next) => {
    let chatId = request.params.id
    ChatLine.findAll({
        where: {
            chatId: chatId
        },
        order: [
            ['createdAt', 'ASC']
        ]
    })
    .then(chatLines => response.status(200).json(chatLines))
    .catch(err => next(err))
})

//params.id is chat id
router.get('/chaticonline/:id', (request, response, next) => {
    let chatId = request.params.id
    ChatLine.max('id', {
        where: {
            chatId: chatId
        },
    })
    .then(chatLine => {
        response.status(200).json(chatLine)
    })
    .catch(err => next(err))
})

router.get('/chaticonlatest/:id', (request, response, next) => {
    let lineId = request.params.id
    ChatLine.findByPk(lineId)
    .then(chatLine => {
        response.status(200).json(chatLine)
    })
    .catch(err => next(err))
})

router.post('/chat', (request, response, next) => {
    const {userOneId, userTwoId} = request.body
    Chat.create({
        userOneId,
        userTwoId 
    })
    .then(chat => response.status(200).json(chat))
    .catch(err => next(err))
})

router.post('/chatline', (request, response, next) => {
    const {chatId, userId, lineText, time} = request.body
    ChatLine.create({
        chatId,
        userId,
        lineText,
        time
    })
    .then(line => response.status(200).json(line))
    .catch(err => next(err))
})

module.exports = router;