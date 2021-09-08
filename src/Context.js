import React, { Component } from 'react'
import { storeProducts , detailProduct } from './data';

// * NO NEED TO PASS PROPS
// * 1- create new context object
const ProductContext = React.createContext()
//  * Provider => provide all data

class ProductProvider extends Component {
    state={
        products:storeProducts,
        detailProduct:detailProduct
    }
    handleDetail = ()=>{
        console.log("DETAIL")
    }
    addToCart = () =>{
        console.log("HELLO FROM CART")
    }
    render() {
        return (

            //  * Value can be an OBJECT 😮 
            //  * take data from data.js

            <ProductContext.Provider value= {{
                // products:this.state.products
                
                // * DESTRUCTION 😶😶 

                ...this.state,
                handleDetail:this.handleDetail,
                addTocart:this.addToCart

            }}>

              {this.props.children}  
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer; 
export {ProductProvider,ProductConsumer}