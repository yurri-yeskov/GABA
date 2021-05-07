import React from 'react'
import '../Styles/LineText.css'

function LineText(props) {
    if (props.currentUserId === props.chat.userId) {
        if (props.chat.lineText.length > 22) {
            let lineText = props.chat.lineText.substr(0, 22) + "...";
            return(
                <div>
                    <div className="you-container">You: </div> {lineText}
                </div>
            )
        }
        else {
            return(
                <div>
                    <div className="you-container">You: </div> {props.chat.lineText}
                </div>
            )
        }
    }
    else {
        if (props.chat.lineText.length > 26) {
            let lineText = props.chat.lineText.substr(0, 26) + "...";
            return (
                <div>
                    {lineText}
                </div>
            )
        }
        else {
            return(
                <div>
                    {props.chat.lineText}
                </div>
            )
        }
    }
}

export default LineText;