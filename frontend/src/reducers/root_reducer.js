import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import listings from './listings_reducer';
import comments from './comments_reducer';

const RootReducer = combineReducers({
    listings,
    comments,
    session,
    errors
})

export default RootReducer;