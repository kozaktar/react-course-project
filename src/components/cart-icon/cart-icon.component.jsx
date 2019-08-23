import React from 'react';

import './cart-icon.styles.scss';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import {toggleDropdown} from './../../redux/cart/cart.actions';
import {connect} from 'react-redux';


const CartIcon=({toggleDropdown, itemCount})=>(
    <div className='cart-icon'  onClick={toggleDropdown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps=createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps=dispatch=>(
    {
      toggleDropdown: () =>dispatch(toggleDropdown())
    }
)

export default connect(mapStateToProps ,mapDispatchToProps)(CartIcon);
