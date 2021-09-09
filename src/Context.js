import React, { Component } from 'react'
import { storeProducts , detailProduct } from './data';

// * NO NEED TO PASS PROPS
// * 1- create new context object
const ProductContext = React.createContext()
//  * Provider => provide all data

class ProductProvider extends Component {
    state={
        // products:storeProducts 

        // * Destruct .. to get all DATA from array or object
        // * it makes a copy of the desired object or array element by assigning them in its own new variables, 
        // * later we can use this new variable in React (class or functional) components.
        // ! will not work bc object in data.js is nested
        // products:[...storeProducts],

        products:[],
        detailProduct:detailProduct
    }
    componentDidMount(){
        // * returning copy of this values
        this.setProducts();
    }

    //  * Get Copy of Products not a refrence of them
    setProducts = () =>{
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts,singleItem]
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
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