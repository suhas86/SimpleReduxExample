import { combineReducers } from 'redux';
import BookReducers from './reducers_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books:BookReducers,
  activeBook:ActiveBook
});

export default rootReducer;
