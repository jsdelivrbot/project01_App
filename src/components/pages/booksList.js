import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postBooks, deleteBooks, updateBooks, updatePrice } from '../../actions/booksActions'

class BookList extends Component {

    render() {

        
        const BookList = this.props.books.map((booksArr) => {
            const ExList = booksArr.test.map((exArr) => {
            return (
                <div key={exArr.id}>
                    <h3>test: {exArr.num}</h3>
                </div>
            )
        })
            return (
                <div key={booksArr.id} className=''>
                    <h3>Id: {booksArr.id}</h3>
                    <h3>title: {booksArr.title}</h3>
                    <button>Add test</button>
                    <h3>{booksArr.decription}</h3>
                    <h3>{ExList}</h3>
                    <h3>price: {booksArr.price}</h3>
                    <button
                        onClick={() => {
                            this.props.dispatch(updatePrice({
                                id: booksArr.id,
                                price: booksArr.price + 1
                            }
                            ))
                        }}
                    >price + 1</button>
                    <h3>===========================</h3>
                </div>
            )
        })
        return (
            <div className=''>
                {BookList}
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books,
        cart: state.cart
        
    }
}
export default connect(mapStateToProps)(BookList)