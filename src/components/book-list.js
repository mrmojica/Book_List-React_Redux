import React from 'react';

export default class BookList extends React.Component {
	renderList() {
		//we return this.props.books since we predict/plan to wireup the books to this.props.books
		return this.props.books.map(book) => {
			return (
				<li key={book.title} className='list-group-item'>{book.title}</li>

				);
		}
	}


	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>


			);
	}


}