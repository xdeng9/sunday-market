import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import listing from './listings_reducer';

const RootReducer = combineReducers({
    listing,
    session,
    errors
})

export default RootReducer;