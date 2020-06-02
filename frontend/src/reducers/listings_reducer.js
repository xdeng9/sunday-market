import { RECEIVE_LISTING, RECEIVE_LISTINGS, REMOVE_LISTING, SEARCH_LISTING } 
from '../actions/listing_actions';

const ListingsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign([], state);
    switch (action.type) {
        case RECEIVE_LISTING:
            return [...state, action.listing]
        case RECEIVE_LISTINGS:
            return action.listings;
        case REMOVE_LISTING:
            newState = newState.filter(listing => listing._id !== action.listingId);
            return newState;
        case SEARCH_LISTING: {
            const { listings, value } = action;
            newState = listings
                .filter(listing => listing.title.toUpperCase().split(" ").some(word => word.startsWith(value.toUpperCase())) 
                || listing.title.toUpperCase().startsWith(value.toUpperCase()));
            return newState;
        }
        default:
            return state;
    }
}

export default ListingsReducer;
