import {createSelector} from 'reselect';

const selectCart= state => state.cart;

export const selectCartItems=createSelector(
    [selectCart], cart=>cart.cartItems
)

export const selectCartItemsCount=createSelector(
    [selectCartItems], cartItems=>cartItems.reduce((accumulatedQuantity, currentItem)=>accumulatedQuantity+currentItem.quantity,0)
)

export const hiddenSelector=createSelector(
    [selectCart],
    cart=>cart.hidden
)

export const selectCartTotal=createSelector(
    [selectCartItems], 
    cartItems=>cartItems.reduce(
        (accumulatedQuantity, currentItem)=>accumulatedQuantity+currentItem.quantity * currentItem.price,0)
)