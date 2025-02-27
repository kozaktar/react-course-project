import React from 'react';
import './checkoutItem.styles.scss';
import {connect} from 'react-redux';
import {clearItem} from '../../redux/cart/cart.actions';
import {addItem} from '../../redux/cart/cart.actions';
import {removeItem} from '../../redux/cart/cart.actions';

const CheckoutItem=({cartItem, clearItem, addItem,removeItem})=>
{
    const {name, quantity, price, imageUrl} =cartItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
        <span className="vlaue">{quantity}</span>
        <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</span>
    </div>
)
};

const mapDispatchToProps =dispatch=>({
    clearItem: item=>dispatch(clearItem(item)),
    addItem: item=>dispatch(addItem(item)),
    removeItem: item=>dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);