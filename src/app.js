"use strict"
import {createStore} from 'redux'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const POST_BOOK = 'post_book'
const DELETE_BOOK = 'delete_book'
const UPDATE_BOOK = 'update_book'

//Step 3 define reducers
const reducer = function(state={books:[]}, action){
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
        
    }
    return state
}

//Step 1 create the store
const store = createStore(reducer)

store.subscribe(function(){
    console.log('current state is: ', store.getState())
})

//Step 2 create and dispatch actions
store.dispatch(
    {
        type: POST_BOOK,
        payload: [{
            id: 1,
            title: 'this is the book title',
            description: 'this is a description',
            price: 10
        },
        {
            id: 2,
            title: 'this is the second book title',
            description: 'this is a description',
            price: 11
        }]
    }
)


//CRUS operations = create, read, update, delete

//dispatch a second action

store.dispatch(
    {
        type: POST_BOOK,
        payload: [{
            id: 3,
            title: 'this is the third book title',
            description: 'this is a description',
            price: 60
        }]
    }
)

//delete a book

store.dispatch(
    {
        type: DELETE_BOOK,
        payload: {
            id: 1
        }
    }
)

//update a book
store.dispatch({
    type: UPDATE_BOOK,
    payload:{
        id: 2,
        title: 'updated title'
    }
})