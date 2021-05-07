import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/SelectedBook.css";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { setChat, initiateRedirect, cancelRedirect } from "../Actions";

class SelectedBookPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullLocation: "",
    };
  }

  componentDidMount() {
    this.props.cancelRedirect();
    if (
      this.props.book.city &&
      this.props.book.state &&
      this.props.book.zipcode
    ) {
      let fullLocation =
        this.props.book.city +
        " " +
        this.props.book.state +
        " (" +
        this.props.book.zipcode +
        ")";
      this.setState({ fullLocation });
    }
  }

  findChat = (otherUserId) => {
    this.props.setChat(otherUserId);
    this.props.initiateRedirect();
  };

  render() {
    if (!this.props.currentUser.id) {
      return <Redirect to="/" />;
    } else if (this.props.redirect) {
      return <Redirect to="/inbox" />;
    }
    return (
      <div className="a-book">
        <div className="book-title">
          <h1>{this.props.book.title}</h1>
          <img src={this.props.book.preview_image} alt="" />
        </div>

        <div className="author-name">
          <h5 className="authname">
            Author: <strong>{this.props.book.author}</strong>
          </h5>
        </div>

        <div className="isbn">
          <h5 className="isbn-num">ISBN: {this.props.book.isbn}</h5>
        </div>

        <div className="location">
          <h5 className="distance">Location: {this.state.fullLocation}</h5>
        </div>

        <div className="userinfo">
          <h5 className="otheruser">
            Posted by:
            <Link to={"/otheruser/" + this.props.book.userId}>
              {this.props.book.username}
            </Link>
          </h5>
        </div>
        <div className="book-condition">
          <h5 className="bookCon">Condition: {this.props.book.condition}</h5>
        </div>

        <button
          type="button"
          className="button10"
          onClick={() => this.findChat(this.props.book.userOwnerId)}
        >
          Contact owner
        </button>

        {/* Uncomment after presentation */}
        {/* <div className="description">
          <h5 className="desc">
          Description:
          </h5>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    chats: state.chats,
    redirect: state.redirect,
  };
};

export default connect(mapStateToProps, {
  setChat,
  initiateRedirect,
  cancelRedirect,
})(SelectedBookPage);
