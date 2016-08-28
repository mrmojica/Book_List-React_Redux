//book-detail container

import React from 'react';
import { connect } from 'react-redux';

//we made bookdetail a container so we can connect to the Redux data.
class BookDetail extends React.Component {

	render() {
		//because we set the state to null when no books are selected we add this condition if null return ...
		if(!this.props.book) {
			return <div>Select a book to get Started.</div>;
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);