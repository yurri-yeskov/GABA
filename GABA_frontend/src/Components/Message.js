import React from 'react'
import '../Styles/Message.css'

function Message(props) {
    if (props.currentUserUsername === props.username) {
        //logged in user's message
        return(
            <div className="current-user">
                <div className="message-username">
                    {props.username}
                </div>
                <div className="message-time">
                    {props.time}
                </div>
                <div className="message-line">
                    {props.lineText}
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="other-user">
                <div className="message-username">
                    {props.username}
                </div>
                <div className="message-time">
                    {props.time}
                </div>
                <div className="message-line">
                    {props.lineText}
                </div>
            </div>
        )
    }
}
export default Message;