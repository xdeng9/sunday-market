import { RECEIVE_LISTING, RECEIVE_LISTINGS, REMOVE_LISTING } 
from '../actions/listing_actions';

const ListingsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign([], state);
    switch (action.type) {
        case RECEIVE_LISTING:
            newState[action.listing.id] = action.listing;
            return newState;
        case RECEIVE_LISTINGS:
            return action.listings;
        case REMOVE_LISTING:
            delete newState[action.listingId];
            return newState;
        default:
            return state;
    }
}

export default ListingsReducer;
