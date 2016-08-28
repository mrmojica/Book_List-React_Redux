//action creator

export function selectBook(book) {
	//selectBook is an ActionCreator, it needs to return an action, an object with a type property.
	return {
		//tyoe is always a string and capitalized (normally pull types in a seperate file)
		type: 'BOOK_SELECTED',
		//payload a piece of data that describes the action.
		payload: book
	};
}