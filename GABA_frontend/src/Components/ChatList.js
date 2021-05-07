import React, {Component} from 'react'
import ChatIconItem from './ChatIconItem';
import '../Styles/ChatList.css';
class ChatList extends Component {
    render() {
        return(
            <div className="chat-list">
                {this.props.chats.map(chat => {
                    return( <ChatIconItem 
                        key={"chat"+chat.chatId} 
                        chat={chat} 
                        redirectToConversation={this.props.redirectToConversation}
                        currentUserId={this.props.currentUserId}
                        />)})} 
            </div>
        );
    }
}

export default ChatList;