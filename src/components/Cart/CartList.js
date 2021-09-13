import React, { Component } from "react";
import CartItem from "./CartItem";

// destruction value using PROPS

export default class CartList extends Component {
  render() {
    const { value } = this.props;
    const { cart } = this.props.value;

     // * ALL Methods 
     console.log(value)

     // * ALL Products
     console.log(cart)
    return (
      <div className="container-fluid">
        {cart.map(item => (
          <CartItem key={item.id} item={item} value={value} />
        ))}
      </div>
    );
  }
}
