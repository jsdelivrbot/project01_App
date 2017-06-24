"use strict"
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux';

import { addToCart } from './actions/cartActions'
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions'
import reducers from './reducers/index'
import BookList from './components/pages/booksList'


//create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)


ReactDOM.render(
    <Provider store={store}>
        <BookList />
    </Provider>, document.getElementById('app'))


//create and dispatch actions
store.dispatch(postBooks(
    [{
        id: 1,
        title: 'tite 1',
        description: 'description 1',
        price: 33.33,
        test: [
            {
                rid: 1,
                num: 12
            },
            {
                rid: 2,
                num: 18
            }
        ]
    },
    {
        id: 2,
        title: 'title 2',
        description: 'description 2',
        price: 50,
        test: [
            {
                rid: 1,
                num: 10
            }
        ]

    }]
))


// store.dispatch(deleteBooks(
//     { id: 1 }
// ))

//update a book
// store.dispatch(updateBooks({
//     id: 2,
//     title: 'updated title'
// }
// ))


// //add to cart

store.dispatch(addToCart([{ id: 1 }]))

