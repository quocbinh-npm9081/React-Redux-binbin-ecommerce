//for add to cart
export const addToCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
}

//for delete item from cart
export const deleteToCart = (product) => {
    return {
        type: 'DELITEM',
        payload: product
    }
}