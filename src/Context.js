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

        // * Empty Cart TO TEST
        cart: [],

        // * Product Cart To TEST
        // cart:storeProducts,

        // * Modal
        modalOpen: false,
        // * single product in data.js 
        modalProduct: detailProduct,

        // * Cart
        carSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
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

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {
                products: [...tempProducts],
                cart: [...this.state.cart, product],
                detailProduct: { ...product }
            };
        }, this.addTotals);
    };


    // * change the content of detailproduct in data.js with specific product when clicked
    handleDetail = (id) => {
        // * 😤😤😤😤😤😤😤😤😤 I FORGOT TO PASS ID
        const product = this.getItem(id)
        this.setState(() => {
            return { detailProduct: product }
        })
    };


    // * OPEN MMODAL
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true
            }
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {
                modalOpen: false
            }
        })
    }

    // * CART

    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
            return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {
            return {
                cart: [...tempCart]
            };
        }, this.addTotals);
    };
    decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
            return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return { cart: [...tempCart] };
            }, this.addTotals);
        }
    };

    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        tempCart = tempCart.filter(item => {
            return item.id !== id;
        });

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, this.addTotals);
    };

    clearCart = () => {
        this.setState(() => {
            return {
                cart: []
                // * issues : 
                // * item is still in cart
                // * Cart Total is as same

            }
        }, () => {
            // * set values to default
            // * SOLVED item is still in car
            this.setProducts()

            // * SOLVED Cart Total is as same
            this.addTotals()
        })
    }

    addTotals = () => {
        let subTotal = 0
        this.state.cart.map(
            item => (subTotal += item.total)
        )

        // * TAX = 10%
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax

        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
            // * this must be called when adding products
        })
    }

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
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,


                }}>

                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }
