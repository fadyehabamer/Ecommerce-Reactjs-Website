import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../Context";
import EmptyCart from "./EmptyCart";
export default class Store extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value

                        {/* CONDITIONAL RENDERING */ }

                        if (cart.length > 0) {
                            return (
                                <section className="mt-4 px-5">
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                                </section>
                            );
                        }
                        else {
                            return (
                                <React.Fragment>
                                    <EmptyCart />
                                </React.Fragment>
                            )
                        }


                    }
                    }
                </ProductConsumer>
            </section>
        );
    }
}
