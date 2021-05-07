const moment = require('moment');

function formatMessage(id, username, line, conversationId, otherUserId) {
    return {
        id,
        username,
        line,
        conversationId,
        time: moment().format('LLL'),
        otherUserId: otherUserId
    }
}

module.exports = formatMessage;