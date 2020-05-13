import { fetchPost, fetchPosts, fetchUserPosts, updatePost, deletePost, createPost } 
from '../util/listing_api_util';

export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const REMOVE_LISTING = 'REMOVE_LISTING';

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing 
})

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings 
})

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
})

export const getListings = () => dispatch => fetchPosts()
    .then(listings => dispatch(receiveListings(listings.data)));

export const getListing = listingId => dispatch => fetchPost(listingId)
    .then(listing => dispatch(receiveListing(listing.data)));

export const getUserListings = userId => dispatch => fetchUserPosts(userId)
    .then(listings => dispatch(receiveListings(listings.data)));

export const createListing = data => dispatch => createPost(data)
    .then(listing => dispatch(receiveListing(listing.data)));

export const updateListing = (listingId, data) => dispatch => updatePost(listingId, data)
    .then(listing => dispatch(receiveListing(listing.data)));

export const deleteListing = listingId => dispatch => deletePost(listingId)
    .then(listing => dispatch(removeListing(listing.data.id)));