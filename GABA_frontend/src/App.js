import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./Components/Post";
import Navbar from "./Components/Navbar.js";
import BookList from "./Components/BookList.js";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./Components/login/SignIn";
import SignUp from "./Components/login/SignUp";
import Profile from "./Components/ProfilePage.js";
import {connect} from 'react-redux';
import OtherUsers from "./Components/OtherUsers.js";
import SelectedBookPage from "./Components/SelectedBookPage";
import './Styles/design.css'
import Chat from './Components/Chat';

class App extends Component {

  render() {
    const NavbarComponent = () => <Navbar />;
    const SignInComponent = () => <SignIn />;
    const SignUpComponent = () => <SignUp />;
    const BookListComponent = () => <BookList />;
    const PostComponent = () => <Post />;
    const ProfileComponent = () => <Profile />;
    const ChatComponent = () => <Chat/>;
    return (
      <div className="design">
        <Router>
          <NavbarComponent />
          <Switch>
                        
            <Route exact path="/" component={SignInComponent} />
                        
            <Route path="/home" component={BookListComponent} />
                        
            <Route path="/signin" component={SignInComponent} />
                        
            <Route path="/signup" component={SignUpComponent} />
                        
            <Route path="/post" component={PostComponent} />
                        
            <Route path="/profile" component={ProfileComponent} />
                        
            <Route path="/inbox" component={ChatComponent} />
                                     
            {this.props.books.map((book) => {
              return (
                <Route
                key={"bookroute"+book.id}
                  path={"/book/" + book.id}
                  render={() => {
                    return (
                      <SelectedBookPage
                        key={"listedbook" + book.id}
                        book={book}
                      />
                    );
                  }}
                />
              );
            })}
            {this.props.bookOwners.map((bookOwner) => {
              return (
                <Route
                key={"bookownerroute"+bookOwner.id}
                  path={"/otheruser/" + bookOwner.id}
                  render={() => {
                    return (
                      <OtherUsers
                        key={"listed" + bookOwner.id}
                        bookOwner={bookOwner}
                      />
                    );
                  }}
                />
              );
            })}
                        
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    currentUser: state.currentUser,
    bookOwners: state.bookOwners,
  };
};

export default connect(mapStateToProps, {
})(App);
