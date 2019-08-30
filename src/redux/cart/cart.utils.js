export const addItemToCart = (cartItems, itemToAdd)=>{
    const existingCartItem = cartItems.find(
        cartItem=>cartItem.id===itemToAdd.id
    );

    if(existingCartItem){
        return cartItems.map(
            item=>item.id===existingCartItem.id 
            ? {
                ...item, quantity: item.quantity+1
            }
            : item
        )
    }

    return [...cartItems, {...itemToAdd, quantity: 1}]
}

export const clearItemFromCart=(cartItems, itemToRemove)=> cartItems.filter(item=>item.id!==itemToRemove.id);

export const removeItemFromCart=(cartItems, itemToRemove)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===itemToRemove.id)
    if(existingCartItem.quantity===1){
        return clearItemFromCart(cartItems,itemToRemove);
    }
    else
        {
            return cartItems.map(
                item=>item.id===existingCartItem.id 
                ? {
                    ...item, quantity: item.quantity-1
                }
                : item
            )
        }
}