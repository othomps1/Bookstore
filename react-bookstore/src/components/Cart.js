import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {

  cartItems = () => {
    return this.props.books.filter(book=> book.inCart)
  }

  getTotal = () => {
    return this.cartItems().reduce((total, book)=> total + book.price, 0)
  }

  render() {
    return (
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="list-group">
                        {this.props.books? this.cartItems().map((book, i)=> <CartItem book={book} key={i} /> ) : ""}
                      <div className="list-group-item .d-inline-block">
                       {this.props.books && this.cartItems().length > 0? `Total: $${ this.getTotal().toFixed(2) }` : `Add books to your cart to view total cost`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           )
  }
}
export default Cart
