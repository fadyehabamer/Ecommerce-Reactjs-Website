import React, { Component } from "react";
export default class CartItem extends Component {
    render() {
        const { id, title, img, price, total, count } = this.props.item;
        const { increment, decrement, removeItem } = this.props.value;

        return (
            <React.Fragment>
                <div className="row my-2 text-capitalize text-center align-items-center">
                    <div className="col-10 mx-auto col-lg-2 my-3 ">
                        <img
                            src={img}
                            style={{ width: "5rem", heigth: "5rem" }}
                            className="img-fluid"
                            alt=""
                        />
                    </div>
                    <div className="col-10 mx-auto col-lg-2  ">
                        <span className="d-lg-none">product :</span> {title}
                    </div>
                    <div className="col-10 mx-auto col-lg-2 ">
                        <strong>
                            <span className="d-lg-none">price :</span> ${price}
                        </strong>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
                        <div className="d-flex justify-content-center ">
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-black mx-1"
                                    aria-label={`Decrease quantity of ${title}`}
                                    onClick={() => {
                                        return decrement(id);
                                    }}
                                >
                                    -
                                </button>
                                <span className="btn btn-black mx-1">{count}</span>
                                <button
                                    type="button"
                                    className="btn btn-black mx-1"
                                    aria-label={`Increase quantity of ${title}`}
                                    onClick={() => {
                                        return increment(id);
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 ">
                        <button
                            type="button"
                            className="cart-icon"
                            aria-label={`Remove ${title} from cart`}
                            onClick={() => removeItem(id)}
                        >
                            <i className="fas fa-trash" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="col-10 mx-auto col-lg-2 ">
                        <strong>item total : ${total} </strong>
                    </div>
                </div>
                <hr />
            </React.Fragment>
        );
    }
}