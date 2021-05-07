import React, { Component } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import {
  setUser,
  postBook,
  clearBooksTemporary,
  setPostedBooks,
  addUser,
  clearUsers,
  addChat,
  clearChats,
  addBookOwner,
} from "../../Actions";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "../../Styles/SignIn.css";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      username: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    this.setValidated(true);
    let sendData = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("http://localhost:3500/api/auth/signin", sendData)
      .then((response) => {
        let data = response.data;
        if (data.status) {
          this.props.clearBooksTemporary();
          this.props.clearUsers();
          this.props.clearChats();
          const user = response.data.data;
          this.fetchBooks(user.id, user.zipcode);
          this.fetchPostedBooks(user.id);
          this.fetchChats(user.id);
          this.props.setUser(user);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Server connection error.");
      });
  };

  setValidated = (validity) => {
    this.setState({
      validated: validity,
    });
  };

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  fetchBooks = async (id, zipcode) => {
    let req = {
      id, //: this.props.currentUser.id,
      zipcode, //: this.props.currentUser.zipcode
    };
    axios
      .post("http://localhost:3500/api/book/recommended", req)
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          let bookOwner = response.data[i].user;
          this.props.addBookOwner(bookOwner);
          this.props.postBook(response.data[i]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchPostedBooks = async (loggedInUserId) => {
    axios
      .get(`http://localhost:3500/api/book/${loggedInUserId}`)
      .then((response) => {
        this.props.setPostedBooks(response.data);
      })
      .catch((err) => console.log(err));
  };

  fetchChats = async (loggedInUserId) => {
    axios
      .get(`http://localhost:3500/api/inbox/${loggedInUserId}`)
      .then((response) => {
        let chatData = response.data;
        for (let i = 0; i < chatData.length; i++) {
          if (chatData[i].userOneId === loggedInUserId) {
            this.fetchUser(chatData[i].userTwoId);
          } else if (chatData[i].userTwoId === loggedInUserId) {
            this.fetchUser(chatData[i].userOneId);
          } else {
            console.log("Couldn't fetch user");
          }
          this.props.addChat(chatData[i]);
        }
      });
  };

  fetchUser = async (userId) => {
    axios.get(`http://localhost:3500/api/user/${userId}`).then((response) => {
      let userData = response.data;
      this.props.addUser(userData);
    });
  };

  render() {
    if (this.props.currentUser.id) {
      return <Redirect to="/home/" />;
    }
    return (
      <Card
        border="primary mx-auto"
        style={{
          width: "400px",
          padding: "40px 20px",
          marginTop: "calc(50vh - 250px)",
        }}
      >
        <h1>Sign In</h1>
        <Row className="p-2">
          <Col>
            <p className="float-left">New User?</p>
            <Link to="/signup">
              <p className="red-color float-left ml-3">Create an Account.</p>
            </Link>
          </Col>
        </Row>
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <Form.Control
                type="text"
                placeholder="Username"
                value={this.state.username}
                name="username"
                onChange={this.handleFormChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please input an username.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Control
                type="password"
                placeholder="Password"
                value={this.state.password}
                name="password"
                onChange={this.handleFormChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a password.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Row>
            <Col>
              <input className="float-left" type="checkbox" />
              <h6 className="float-left ml-1">Keep me signed in.</h6>
            </Col>
          </Row>
          <Button
            style={{ width: "100%" }}
            type="submit"
            variant="danger"
            className="rounded-pill"
          >
            Sign In
          </Button>
        </Form>
      </Card>
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
  clearBooksTemporary,
  setUser,
  postBook,
  setPostedBooks,
  addUser,
  clearUsers,
  addChat,
  clearChats,
  addBookOwner,
})(SignIn);
