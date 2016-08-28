//active book reducer
//all reducers get two arguements, the current state and action.  Reducers will always have a action since that is when its called.
//State arguement is not application state, only the state
//this reducer is responsible for.
export default function(state = null, action) {
	//if we do care about the action
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
			//NEVER MUTATE THE STATE we want to return a fresh object
	}

	//if we dont care about the action (must always return a non undefined value because of Redux, so we set state = null)
	return state
}