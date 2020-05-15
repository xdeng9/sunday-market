import { connect } from 'react-redux';
import ProItem from './ProItem';
import { getUserListings, updateListing, deleteListing, createListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProp) => ({
  userId: state.session.user.id,
  listings: state.listings,
  listingId: state.listings[ownProp.match.params.listingId]
})

const mapDispatchToProps = dispatch => ({
  getUserListings: (userId) => dispatch(getUserListings(userId)),
  updateListing: () => dispatch(updateListing()),
  deleteListing: (listingId) => dispatch(deleteListing(listingId)), 
  createListing: (listing) => dispatch(createListing(listing))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProItem);