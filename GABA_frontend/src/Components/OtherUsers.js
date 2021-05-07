import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, setUser, postBook, clearBooksTemporary } from "../Actions";

import BookItem from "./BookItem";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

class OtherUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userbooks: [],
    };
  }

  fetchUserBooks = async () => {
    let requestObj = {
      currentUserZipcode: this.props.currentUser.zipcode,
      otherUserZipcode: this.props.bookOwner.zipcode,
      userId: this.props.bookOwner.id,
    };
    axios
      .post(`http://localhost:3500/api/book/userbooks`, requestObj)
      .then((response) => {
        const userbooks = response.data;
        this.setState({ userbooks });
      })
      .catch((err) => {});
  };
  componentDidMount() {
    this.fetchUserBooks();
  }

  render() {
    return (
      <div>
        <h1>HIIII</h1>
        <div className="profile-title">{this.props.bookOwner.username}</div>
        <div>
          <div>
            <div className="list-box m-3 py-5">
              <Container>
                <Row className="py-5">
                  {this.state.userbooks.map((item, key) => {
                    console.log(item);
                    item.owner = this.props.bookOwner.username;
                    return (
                      <Col key={key} md={3} sm={6} className="list py-3">
                        <div className="imagebox m-auto">
                          <BookItem book={item} />
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
          </div>
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
    postedBooks: state.postedBooks,
    otherPosted: state.otherPosted,
  };
};

export default connect(mapStateToProps, {
  setUser,
  postBook,

  addUser,
  clearBooksTemporary,
})(OtherUser);
