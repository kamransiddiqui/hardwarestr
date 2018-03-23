import React, { Component } from 'react';
import ProductList from './ProductList'

class Cart extends Component {

    removeProductFromCart = (index) => {
        this.props.removeProductFromCart(index);
    };

    render() {
        const cart = this.props.cart;

        const cartComponents = cart.map((product, index) => {
            return <ProductList
                productName={product.productName}
                description={product.description}
                price={product.price}
                key={index}
                index={index}
                removeProductFromCart={this.props.removeProductFromCart}
            />;
        });

        return (
            <div>
                <h3>{cartComponents.productName}</h3>
                {cartComponents}
            </div>
        );
    }
}

export default Cart;