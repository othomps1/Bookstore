import React from 'react'
import Book from './Book'

const BookList = ({ books, searchInput, addToCart }) => (
    books.filter(book => (
        book.title.includes(searchInput) || book.author.includes(searchInput)
    )).map((book, idx) => (
        <Book key={idx} book={book} addToCart={addToCart}/>
    ))
)
export default BookList
