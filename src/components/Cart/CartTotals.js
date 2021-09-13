import React, { Component } from "react";
import PayPalButton from "./payPalButton";
import { Link } from "react-router-dom";
import '../../App.css'
export default class CartTotals extends Component {
    render() {
        // * DESTRUCTION

        const {
            cartSubTotal,
            cartTax,
            cartTotal,
            cart,
            clearCart
        } = this.props.value;
        const { history } = this.props;
        const emptyCart = cart.length === 0 ? true : false;
        return (
            <React.Fragment>
                {!emptyCart && (
                    <div className="container">
                        <div className="row">
                            <div className="col-10 mt-4 mb-5 text-capitalize">
                                <Link to="/cart">
                                    <button
                                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                        type="button"
                                        onClick={() => {
                                            clearCart();
                                        }}
                                    >
                                        clear cart
                                    </button>
                                </Link>
                                <h5>
                                    <span className="text-title"> subtotal :</span>{" "}
                                    <strong>$ {cartSubTotal} </strong>
                                </h5>
                                <h5>
                                    <span className="text-title"> tax :</span>{" "}
                                    <strong>$ {cartTax} </strong>
                                </h5>
                                <h5>
                                    <span className="text-title"> total :</span>{" "}
                                    <strong>$ {cartTotal} </strong>
                                </h5>
                                <PayPalButton
                                    totalAmount={cartTotal}
                                    clearCart={clearCart}
                                    history={history}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}