import React from 'react'

export default class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
            book: []
        }
    }

    findBook = (e) => {
        e.preventDefault()
        const searchInput = e.target.value
        const { matchingBook } = this.props
        this.setState({
            ...this.state,
            input: searchInput
        })

        matchingBook(searchInput)
        console.log(this.state)
    }


    render() {
        return (
            <form>
                <label htmlFor='Book'>Search:
                    <input type='text' value={this.state.input} onChange={this.findBook}></input>
                </label>
            </form>
        )
    }
}
