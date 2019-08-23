import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

import CustomButton from './../custom-button/custom-button.component';

const CartDropdown=({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {cartItems.map(item=>(
           <CartItem item={item} key={item.id}/> 
        ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps=(state)=>({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown);