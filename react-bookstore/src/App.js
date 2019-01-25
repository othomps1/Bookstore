import React, { Component } from 'react'
import Search from './components/Search'
import BookList from './components/BookList'
import Cart from './components/Cart'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.apiBase = 'http://localhost:8082/api/books'
    this.state = {
      books: [],
      searchInput: ''
    }
  }

 async componentDidMount() {
   const response = await fetch(this.apiBase)

   if (response.status === 200) {
     const resJSON = await response.json()
     if(!resJSON[0]) return
     console.log('resJSON', resJSON)
     this.setState({
       ...this.state,
       books: resJSON
     })
   } else {
     console.log('Error:', response)
     throw new Error('GET request failed')
   }
 }

 matchingBook = searchInput => {
    this.setState({
      ...this.state,
      searchInput
    })
  }

  addToCart = id => {
    this.setState({
      ...this.state,
      books: this.state.books.map(book => {
        if (book.id === id) book.inCart = true
        return book
      })
    })
  }

  render() {
    return (
      <main>
        <Search matchingBook={this.matchingBook} />
        <br/>
        <div className='container'>
          <ul>
            <BookList books={this.state.books} searchInput={this.state.searchInput} addToCart={this.addToCart}/>
          </ul>
        </div>
        <div className='container'>
          <h2>Cart</h2>
          <ul>
            <Cart books={this.state.books} />
          </ul>
        </div>
      </main>
    )
  }
}

export default App
