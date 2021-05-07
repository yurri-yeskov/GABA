import React, {Component} from 'react'
import '../Styles/BookItem.css';
import {Link} from 'react-router-dom';

class BookItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            approximateDistance: "In your area"
        }
    }

    componentDidMount() {
        if (this.props.book.owner === "self") {
            this.setState({
                approximateDistance: ""
            })
        }
        else if (this.props.book.distance !== "0.0") {
            this.setState({
                approximateDistance: this.props.book.distance + " miles from you"
            })
        }
    }

    render() {
        return (
            <div className="book-item">
                <Link to={"/book/" + this.props.book.id} className="book-link">
                    <div className="book-item-img-div">
                        <img src = {this.props.book.preview_image} alt=""/>
                    </div>
                </Link>
                <div className="book-item-info">
                    <Link to={"/book/" + this.props.book.id} className="book-link">
                        <div className="book-item-title">
                            {this.props.book.title}
                        </div>
                    </Link>
                    <div className="book-item-author">
                        {this.props.book.author}
                    </div>
                    <div className="book-item-distance">
                        {this.state.approximateDistance}
                    </div>
                </div>
            </div>
        );
    }
}

export default BookItem;