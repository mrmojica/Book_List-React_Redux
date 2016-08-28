import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';


//our state = an object with a key of books and an array of books.
const rootReducer = combineReducers({
	//key = books and value = what is returned from the book reducer.
	//booksreducer is only responsible for creating the value for the property books.
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;
