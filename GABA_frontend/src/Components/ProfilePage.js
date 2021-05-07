import React, { Component } from "react";
import MyBooks from "./mybooks";
import { connect } from "react-redux";
import {
  setUser,
  postBook,
  clearBooksTemporary,
  clearBookOwner,
} from "../Actions";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

class Profile extends Component {
  logout = () => {
    this.props.clearBooksTemporary();
    this.props.setUser({});
    this.props.clearBookOwner();
  };

  render() {
    if (!this.props.currentUser.id) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="profile-title">Books You Are Giving Away</div>
        <div>
          <div className="log-out">
            <Link to="/">
              <button type="button" class="button20" onClick={this.logout}>
                Log Out
              </button>
            </Link>
          </div>
        </div>
        <div>
          <MyBooks />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    books: state.books,
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  setUser,
  postBook,
  clearBooksTemporary,
  clearBookOwner,
})(Profile);
