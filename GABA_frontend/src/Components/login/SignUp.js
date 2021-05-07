import React, { Component } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  setUser,
  postBook,
  clearBooksTemporary,
  clearPostedBooks,
  addBookOwner,
} from "../../Actions";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      zip: "",
      validated: false,
      newUser: {},
    };
  }

  setValidated = (validity) => {
    this.setState({
      validated: validity,
    });
  };

  handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setValidated(false);
      return;
    }
    this.setValidated(true);

    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    let newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      zip: this.state.zip,
    };
    axios
      .post("http://localhost:3500/api/auth/signup", newUser)
      .then((response) => {
        if (response.data.status) {
          this.props.clearBooksTemporary();
          const user = response.data.newUser;
          this.props.setUser(user);
          this.props.clearPostedBooks();
          this.fetchBooks(user.id, user.zipcode);
        } else {
          if (response.data.message) {
            alert(response.data.message);
          } else {
            alert("Something went wrong");
          }
          return;
        }
      })
      .catch((err) => {});
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
      .catch((err) => {});
  };

  //   fetchUsers = async () => {
  //     axios.get("http://localhost:3500/api/user/")
  //     .then(response => {
  //       for (let i = 0; i < response.data.length; i++) {
  //         this.props.addUser(response.data[i]);
  //       }
  //     })
  //     .catch(err => {
  //     })
  //   }

  handleFormChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
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
        <h1>Sign Up</h1>
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleFormChange}
              />
              <Form.Control.Feedback type="invalid">
                Please input your first name.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom02">
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleFormChange}
              />
              <Form.Control.Feedback type="invalid">
                Please input your last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                name="userName"
                value={this.state.userName}
                onChange={this.handleFormChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <Form.Control
                type="email"
                placeholder="Email"
                value={this.state.email}
                name="email"
                onChange={this.handleFormChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose an email.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleFormChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a password.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleFormChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a confirm password.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationCustom05">
              <Form.Control
                type="text"
                placeholder="Zip"
                value={this.state.zip}
                name="zip"
                onChange={this.handleFormChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="p-2">
            <Col>
              <p className="float-left">Already have an account?</p>
              <Link to="/">
                <p className="red-color float-left ml-3">Log in</p>
              </Link>
            </Col>
          </Form.Row>
          <Button
            style={{ width: "100%" }}
            type="submit"
            variant="danger"
            className="rounded-pill"
          >
            Sign Up
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
  clearPostedBooks,
  addBookOwner,
})(SignUp);
