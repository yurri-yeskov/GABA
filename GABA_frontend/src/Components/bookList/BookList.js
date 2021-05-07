import React, { useState } from 'react'
import { Col, Container, Image, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Input, Search } from 'semantic-ui-react';
import "./../../Styles/BookList.css"

const searchData = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkB1qK13I9DeSy79dXGjGJC5UoMbCym9ioYg&usqp=CAU'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioiWoj41EsWNdtWg-9SXkOigp0PNYREKfNA&usqp=CAU'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMzIsRW3aVyq3JKEkGST6ogEe09honlpfZQ&usqp=CAU'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21hq6ljHHF1hnaxsYWrut5KqlRmeb4gVtJw&usqp=CAU'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7gvR8b4uAN9pyiBoz7F2UIxIfi9opCeZ4Q&usqp=CAU'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7gvR8b4uAN9pyiBoz7F2UIxIfi9opCeZ4Q&usqp=CAU'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7gvR8b4uAN9pyiBoz7F2UIxIfi9opCeZ4Q&usqp=CAU'
    }
]
const BookList = () => {
    const [searchKey, setSearchKey] = useState('');
    const [bookList, setBookList] = useState(searchData);
    const onChangeSearch = (e) => {
        setSearchKey(e.target.value)
    }

    const onKeyDown = (e) => {
        if(e.key === "Enter"){
            // to backend
        }
    }

    return (
        <>
            <div className="search-box py-5">
                <Input
                    className="search-input m-auto"
                    placeholder="Search by title, author, or ISBN"
                    value={searchKey}
                    onChange={onChangeSearch}
                    onKeyDown={onKeyDown}
                />
            </div>
            <div className="list-box m-2 py-5">
                <Container >
                    <Row className="py-5">
                        {bookList.map((item, key) => {
                            return (
                            <Col key={key} md={3} sm={6} className="list py-3">
                                <div className="imagebox m-auto">
                                    <Image thumbnail className="list-item" src={item.img} />
                                </div>
                            </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BookList;