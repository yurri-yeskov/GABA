const Book = require('./book');
const User = require('./user');
const Chat = require('./chat');
const ChatLine = require('./chatLine');

User.hasMany(Book);
Book.belongsTo(User);
Chat.belongsTo(User, {
    foreignKey: {
        name: "userOneId"
    },
    as: "userOne"
})
Chat.belongsTo(User, {
    foreignKey: {
        name: "userTwoId"
    },
    as: "userTwo"
})
ChatLine.belongsTo(Chat);
Chat.hasMany(ChatLine);
ChatLine.belongsTo(User);
User.hasMany(ChatLine);

// Chat.findOne({
//     where: {
//          // Your condition goes here
//     },
//     includes: [
//         {
//              model: User,
//              as: "userOne"
//         },
//         {
//              model: User,
//              as: "userTwo"
//         },
//     ]
// })

module.exports = {
    Book, User, Chat, ChatLine
}