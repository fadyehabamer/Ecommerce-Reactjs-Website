import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

// * NO NEED TO PASS PROPS
// * 1- create new context object
const ProductContext = React.createContext()
//  * Provider => provide all data

class ProductProvider extends Component {
    state = {
        // products:storeProducts 

        // * Destruct .. to get all DATA from array or object
        // * it makes a copy of the desired object or array element by assigning them in its own new variables, 
        // * later we can use this new variable in React (class or functional) components.
        // ! will not work bc object in data.js is nested
        // products:[...storeProducts],

        products: [],
        // * one single product
        detailProduct: detailProduct,


        cart: []
    }
    componentDidMount() {
        // * returning copy of this values
        this.setProducts();
    }

    //  * Get Copy of Products not a refrence of them
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item }
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return { products: tempProducts }
        })
    };


    // * return ITEM wich has the same id
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id)
        return product
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price

        // * update the state with product

        this.setState(() => {
            return {
                products: tempProducts,
                cart: [...this.state.cart, product]
            }
        }, () => { console.log(this.state) })


    };


    // * change the content of detailproduct in data.js with specific product when clicked
    handleDetail = (id) => {
        // * 😤😤😤😤😤😤😤😤😤 I FORGOT TO PASS ID
        const product = this.getItem(id)
        this.setState(() => {
            return { detailProduct: product }
        })
    };


    render() {
        return (

            //  * Value can be an OBJECT 😮 
            //  * take data from data.js

            <ProductContext.Provider
                value={{
                    // products:this.state.products

                    // * DESTRUCTION 😶😶 

                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart

                }}>

                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }