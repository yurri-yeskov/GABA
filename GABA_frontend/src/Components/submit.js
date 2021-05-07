import React, { Component } from 'react';
import '../Styles/PostButtons.css';



class Buttons extends Component {
    render(){
        return (
                    <button className='button' onClick={this.props.confirmBookPost}>
                        Post Book
                    </button>
        );
    }
  }
export default Buttons;