import React, {Component} from 'react'
import '../Styles/ConversationWindow.css'
import MessageList from './MessageList'


class ConversationWindow extends Component {
    render() {
        if (this.props.conversationUsername) {
            return(
                <div className="conversation-list">
                    <div className="conversation-username">
                        {this.props.conversationUsername}
                    </div>
                    <form className="chat-form" onSubmit={this.props.handleChatFormSubmit}>
                        <input className="text-input" autoComplete="off" type="text" name="message" value={this.props.message} onChange={this.props.handleChatFormChange}/>
                        <input className="send-button" type="submit" value="Send" />
                    </form>
                    <MessageList 
                        conversation={this.props.conversation}
                        currentUserUsername={this.props.currentUserUsername}
                    />
                </div>
            );
        }
        else {
            return(
                <div className="empty-conversation">
                    Select a chat to start messaging
                </div>
            );
        }
    }
}

export default ConversationWindow;