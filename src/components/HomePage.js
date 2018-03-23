import React, { Component } from 'react';
import AdminView from './AdminView.js'
import CartView from './CartView'

class HomePage extends Component {

    state = {
        itemCurrentlyOnSale: 'A Hammer',
        editSaleItem: false,
        productList: [
            {
                productName: 'Hammer',
                description: 'Itsa hammer',
                price: 12.3,
            },
            {
                productName: 'Nail',
                description: 'Itsa nail',
                price: 0.12,
            }
        ]
    };
    addNewProductToProductList = (newProduct) => {
        const productList = [...this.state.productList];
        productList.push(newProduct);
        this.setState({ productList });
    };

    addNewProductToCart = (cartAdd) => {
        const cart = [...this.state.productList];
        const cartList = [...this.state.cartList];
        
        cartList.push(cartAdd);
        
        this.setState({ cartList });
    };


    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({ editSaleItem })
    }

    handleItemCurrentlyOnSaleChange = (event) => {
        const itemCurrentlyOnSale = event.target.value;
        this.setState({ itemCurrentlyOnSale });
    };

    render() {
        return (
            <div>
                <h1>My Hardware Store</h1>
                <div>
                    <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
                    <span>
                        <button onClick={this.toggleEditSaleItem}>
                            {this.state.editSaleItem ? "hide" : "Edit sale item"}
                        </button>
                    </span>

                    {
                        this.state.editSaleItem ?
                            <div>
                                <input
                                    onChange={this.handleItemCurrentlyOnSaleChange}
                                    value={this.state.itemCurrentlyOnSale}
                                    type="text" />
                            </div>
                            : null
                    }
                    <AdminView
                        productList={this.state.productList}
                        addNewProductToProductList={this.addNewProductToProductList} />
                    {/* <CartView
                        productList={this.state.cartList}
                         /> */}
                </div>
            </div>
        );
    }
}

export default HomePage;