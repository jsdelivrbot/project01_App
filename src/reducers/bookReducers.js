
const POST_BOOK = 'post_book'
const DELETE_BOOK = 'delete_book'
const UPDATE_BOOK = 'update_book'
const ADD_TO_PRICE = 'price_update'
const ADD_TEST = 'add_text'


//books reducers

export function bookReducers(state={books:[]}, action){
    switch(action.type){
        case POST_BOOK:
        // let books = state.books.concat(action.payload)
        // return {books}
        return {books: [...state.books, ...action.payload]}

        case DELETE_BOOK:
        //create a copy of current array of books
        const currentBookToDelete = [...state.books]
        // determine at which index in books array is the book to be deleted
        const indexToDelete = currentBookToDelete.findIndex(
            function(book){
                return book.id === action.payload.id
            }
        )
        return {books: [...currentBookToDelete.slice(0, indexToDelete), 
            ...currentBookToDelete.slice(indexToDelete + 1)]}
        //=======================================================



        
        case UPDATE_BOOK:
        //create a copy of current array of books
        const currentBookToUpdate = [...state.books]
        // determine at which index in books array is the book to be Updated
        const indexToUpdate = currentBookToUpdate.findIndex(
            function(book){
                return book.id === action.payload.id
            }
        )
        //Create a new book object with the new values and with the same array
        //index of the item we want to replace. To archive this use ..spread
        //or concat method
        const newBookToUpdate = {
            ...currentBookToUpdate[indexToUpdate],
            title: action.payload.title
        }
        console.log('newBookToUpdate: ', newBookToUpdate)
        //use slice to remove the book at the specified index, replace with the new 
        //object and concate with the rest of items in the array
        return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
            ...currentBookToUpdate.slice(indexToUpdate + 1)]}

        //=========================================================
        case ADD_TO_PRICE:
        //create a copy of current array of books
        const currentPriceToUpdate = [...state.books]
        // determine at which index in books array is the book to be Updated
        const indexToAdd = currentPriceToUpdate.findIndex(
            function(book){
                return book.id === action.payload.id
            }
        )
        //Create a new book object with the new values and with the same array
        //index of the item we want to replace. To archive this use ..spread
        //or concat method
        const newPriceToUpdate = {
            ...currentPriceToUpdate[indexToAdd],
            price: action.payload.price
        }
        console.log('newPriceToUpdate: ', newPriceToUpdate)
        //use slice to remove the book at the specified index, replace with the new 
        //object and concate with the rest of items in the array
        return {books: [...currentPriceToUpdate.slice(0, indexToAdd), newPriceToUpdate,
            ...currentPriceToUpdate.slice(indexToAdd + 1)]}

        
        
    }
    return state
}