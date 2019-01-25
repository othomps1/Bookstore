import React, { Component } from 'react'
import Search from './components/Search'
import BookList from './components/BookList'
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


  render() {
    return (
      <main>
        <Search matchingBook={this.matchingBook} />
        <br/>
        <ul>
          <BookList books={this.state.books} searchInput={this.state.searchInput} />
        </ul>
      </main>
    )
  }
}

export default App
