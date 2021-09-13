import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../Context";

import { withRouter } from "react-router-dom";
class ProductList extends Component {
    state = {
        products: storeProducts
    };
    render() {
        return (
            <React.Fragment>
                <ProductWrapper className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id}
                                            product={product} />;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </ProductWrapper>
            </React.Fragment>
        );
    }
}
export default withRouter(ProductList)
const ProductWrapper = styled.section``;