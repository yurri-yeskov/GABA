import React, { Component } from 'react'
import Message from './Message'
import '../Styles/MessageList.css'

class MessageList extends Component {
    componentDidUpdate() {
        this._div.scrollTop = this._div.scrollHeight;
    }

    render() {
        return(
            <div className="message-list" ref={(ref) => this._div = ref}>
                {this.props.conversation.map(line => (
                    <Message
                        key={Math.random()}
                        username={line.username}
                        lineText={line.lineText}
                        time={line.time}
                        currentUserUsername={this.props.currentUserUsername}
                        />
                ))}
            </div>
        );
    }
}

export default MessageList;