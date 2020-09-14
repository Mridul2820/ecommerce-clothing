import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="haeder-block">
                <span>Product</span>
            </div>
            <div className="haeder-block">
                <span>Description</span>
            </div>
            <div className="haeder-block">
                <span>Quantity</span>
            </div>
            <div className="haeder-block">
                <span>Price</span>
            </div>
            <div className="haeder-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                cartItem.name
            )
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems,
    total : selectCartTotal
})

export default connect(
    mapStateToProps
)(CheckoutPage);