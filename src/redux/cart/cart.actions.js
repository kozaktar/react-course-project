import CartActionTypes from './cart.types';

export const toggleDropdown=()=>(
    {
        type:CartActionTypes.TOGGLE_DROPDOWN
    }
);

export const addItem=(item)=>(
    {
        type:CartActionTypes.ADD_ITEM,
        payload:item
    }
);