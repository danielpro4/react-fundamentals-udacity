import React from 'react'
import PropTypes from 'prop-types'
import Book from '../Book/Book'

class Bookshelf extends React.Component{

	render = () => {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.books.map( (book,i) => <li key={i}> <Book getBooks={this.props.getBooks} book={book} /> </li> )}
					</ol>
				</div>
			</div>
		);
	}
}

Bookshelf.propTypes = {
	title: PropTypes.string,
	books: PropTypes.array,
	getBooks: PropTypes.func
};

export default Bookshelf;