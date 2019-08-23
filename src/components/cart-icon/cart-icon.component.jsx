import React from 'react';

import './cart-icon.styles.scss'

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import {toggleDropdown} from './../../redux/cart/cart.actions';
import {connect} from 'react-redux';

import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

const CartIcon=({toggleDropdown, itemCount})=>(
    <div className='cart-icon'  onClick={toggleDropdown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps=(state)=>({
    itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps=dispatch=>(
    {
      toggleDropdown: () =>dispatch(toggleDropdown())
    }
)

export default connect(mapStateToProps ,mapDispatchToProps)(CartIcon);
