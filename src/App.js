import React from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom"
import Bookshelf from './Bookshelf/Bookshelf'
import Search from './Search/Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
      books: []
  }

  getBooks = () => {
    BooksAPI.getAll().then(data => {
        this.setState({
            books: data
        });
    }).catch(error => {})
  }

  componentDidMount = () =>{
    this.getBooks();
  }

  render = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Route path="/search" exact render={()=>(
                    <Search getBooks={this.getBooks} />
                )} />

                <Route path="/" exact render={()=>(
                    <div className="list-books">
                      <div className="list-books-title">
                        <h1>MyReads</h1>
                      </div>
                      <div className="list-books-content">
                        <div>
                          <Bookshelf getBooks={this.getBooks} title="Currently Reading" books={this.state.books.filter( book => book.shelf === "currentlyReading" ) } />
                          <Bookshelf getBooks={this.getBooks} title="Want to Read" books={this.state.books.filter( book => book.shelf === "wantToRead" ) } />
                          <Bookshelf getBooks={this.getBooks} title="Read" books={this.state.books.filter( book => book.shelf === "read" ) } />
                        </div>
                      </div>
                      <div className="open-search">
                        <Link to={"/search"}>Add a book</Link>
                      </div>
                    </div>
                )} />
            </div>
        </BrowserRouter>      
    )
  } 
}
export default BooksApp
