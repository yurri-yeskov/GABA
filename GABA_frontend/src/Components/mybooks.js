import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RemoveButton from "./removebook";
import { connect } from "react-redux";
import { removePostedBook } from "../Actions";
import BookItem from "./BookItem";
import axios from "axios";

import "../Styles/BookList.css";
class MyBooks extends Component {
  removeBook = (book) => {
    axios
      .delete(`http://localhost:3500/api/book/${book.id}`)
      .then(this.props.removePostedBook(book))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="list-box m-3 py-5">
        <Container>
          <Row className="py-5">
            {this.props.postedBooks.map((item, key) => {
              item.distance = "0.0";
              item.owner = "self";
              return (
                <Col key={key} md={3} sm={6} className="list py-3">
                  <div className="imagebox m-auto">
                    <BookItem book={item} />
                    <RemoveButton removeBook={() => this.removeBook(item)} />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postedBooks: state.postedBooks,
  };
};

export default connect(mapStateToProps, {
  removePostedBook,
})(MyBooks);
