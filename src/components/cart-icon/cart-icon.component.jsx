import React from 'react';

import './cart-icon.styles.scss'

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import toggleDropDown from './../../redux/cart/cart.actions';
import {connect} from 'react-redux';

const CartIcon=({toggleDropDown})=>(
    <div className='cart-icon'  onClick={toggleDropDown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps=dispatch=>(
    {
      toggleDropDown: () =>dispatch(toggleDropDown())
    }
)

export default connect(null,mapDispatchToProps)(CartIcon);
