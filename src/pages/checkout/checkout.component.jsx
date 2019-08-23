import React from 'react';
import './checkout.styles.scss';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {selectCartTotal} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkoutItem.component';

const CheckoutPage = ({cartItems, cartTotal})=>(
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-blocks">
                <span>Product</span>
            </div>
            <div className="header-blocks">
                <span>Description</span>
            </div>
            <div className="header-blocks">
                <span>Quantity</span>
            </div>
            <div className="header-blocks">
                <span>Price</span>
            </div>
            <div className="header-blocks">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(item=>
            <CheckoutItem cartItem={item} key={item.id}/>)}
        <div className="total">
            Total: ${cartTotal}
        </div>
    </div>
)

const mapStateToProps=createStructuredSelector(
    {
        cartItems:selectCartItems,
        cartTotal:selectCartTotal
    }
)
export default connect(mapStateToProps)(CheckoutPage);