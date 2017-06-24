//add to cart
const ADD_TO_CART = 'add_to_cart'

export function addToCart(book) {
    return {
        type: ADD_TO_CART,
        payload: book
    }
}
