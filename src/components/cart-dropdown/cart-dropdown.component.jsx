import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';
import {toggleDropdown} from '../../redux/cart/cart.actions';


import './cart-dropdown.styles.scss';

import CustomButton from './../custom-button/custom-button.component';

const CartDropdown=({cartItems, history, dispatch})=>(
    <div className='cart-dropdown'>
    { cartItems.length?
        <div className='cart-items'>
        {cartItems.map(item=>(
           <CartItem item={item} key={item.id}/> 
        ))}
        </div>:
        <span className='empty-message'>YOUR CART IS EMPTY</span>   
    }
        <CustomButton onClick={
            ()=>{
            dispatch(toggleDropdown());
            history.push('/checkout');
            }
            }>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps=(state)=>({
    cartItems: selectCartItems(state)
})
export default withRouter(connect(mapStateToProps)(CartDropdown));