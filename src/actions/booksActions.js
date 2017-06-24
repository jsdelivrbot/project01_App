const POST_BOOK = 'post_book'
const DELETE_BOOK = 'delete_book'
const UPDATE_BOOK = 'update_book'
const ADD_TO_PRICE = 'price_update'
const ADD_TEST = 'add_text'


export function postBooks(book) {
    return {
        type: POST_BOOK,
        payload: book
    }

}

export function deleteBooks(id) {
    return {
        type: DELETE_BOOK,
        payload: id
    }

}

export function updateBooks(book) {
    return {
        type: UPDATE_BOOK,
        payload: book
    }

}

export function updatePrice(book) {
    return {
        type: ADD_TO_PRICE,
        payload: book
    }

}

//======
export function addTest(book) {
    return {
        type: ADD_TEST,
        payload: ex
    }

}