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