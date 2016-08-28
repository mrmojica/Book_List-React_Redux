//book-list container

import React from 'react';

//we promoted booklist to a container by adding the connect 'react-redux and adding the function mapstatetoProps() function.
// get connection from redux to our bookList using the library react-redux //if we curly braces we pull of a single property ex connect.
import {connect} from 'react-redux';
//import the action creator
import {selectBook} from '../actions/index';
//function that is used to make sure the action generated actually flows through all the reducers.
import {bindActionCreators} from 'redux';

class BookList extends React.Component {
	renderList() {

		//we return this.props.books since we predict/plan to wireup the books to this.props.books
		return this.props.books.map((book) => {
			return (
				<li 
				key={book.title} 
				onClick={() => this.props.selectBook(book)}
				className='list-group-item'>
				{book.title}
				</li>

				);
		});
	}


	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>


			);
	}


}

//this function is the glue between react and redux
//*important1* whenever our state changes (paramter) the container will re-render with new list of books (booklist will rerender).
//*important2*whenever the application state changes the object in the state function will be assigned to as props in the component. ex: this.props.books
//purpose of this function is to take our state of application as an argument (array of books and active book).
function mapStateToProps(state) {
	//whatever is returned will show up as props
	//inside a bookList
	return {
		//will return the value to this.props.books in the BookList component.
		books: state.books
	};
}

//anything returned from this function will end up as props on the booklist container.
function mapDispatchToProps(dispatch) {
	//Whenever selectbook is called, the result should be passed to all of our reducers (bindActionCreators() takes actions then dispatched to all reducers)
	//the selectbook value is actually the action we imported
	return bindActionCreators({ selectBook: selectBook}, dispatch);

}



//exporting the container
//connect takes a function and a component and produces a container!!
//it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect (mapStateToProps, mapDispatchToProps)(BookList);

//a container is a normal react component that gets bonded to the application state.  We connect the two together.  When the application state changes, the container will re-render as well.