import React, {Component} from 'react'
import '../Styles/ChatIconItem.css'
import LineText from './LineText'
import ImageIcon from './ImageIcon'

class ChatIconItem extends Component {
    render() {
        if (this.props.chat.new) {
            return(
                <div className="conversation-container" onClick={() => {
                    this.props.redirectToConversation(this.props.chat.chatId)
                    }}>
                    <div className="img-icon"> 
                        <ImageIcon firstLetter={this.props.chat.username[0] || "A"}/>
                    </div>
                    <div className="additional-info">
                        <div className="icon-username">
                            {this.props.chat.username}
                        </div>
                        <div className="icon-line-new">
                            <LineText currentUserId={this.props.currentUserId} chat={this.props.chat} />
                        </div>
                        <div className="icon-time">
                            {this.props.chat.time}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="conversation-container" onClick={() => {
                    this.props.redirectToConversation(this.props.chat.chatId)
                    }}>
                    <div className="img-icon"> 
                        <ImageIcon firstLetter={this.props.chat.username[0] || "A"}/>
                    </div>
                    <div className="additional-info">
                        <div className="icon-username">
                            {this.props.chat.username}
                        </div>
                        <div className="icon-line">
                            <LineText currentUserId={this.props.currentUserId} chat={this.props.chat} />
                        </div>
                        <div className="icon-time">
                            {this.props.chat.time}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ChatIconItem;