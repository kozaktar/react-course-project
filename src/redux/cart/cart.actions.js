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

export const clearItem=(item)=>(
    {
        type:CartActionTypes.CLEAR_ITEM,
        payload:item
    }
);

export const removeItem=(item)=>(
    {
        type:CartActionTypes.REMOVE_ITEM,
        payload:item
    }
);