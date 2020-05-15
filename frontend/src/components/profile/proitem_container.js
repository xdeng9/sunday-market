import { connect } from 'react-redux';
import ProItem from './ProItem';
import { getUserListings, updateListing, deleteListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProp) => ({
  userId: state.session.user.id,
  listings: state.listings,
  listingId: state.listings[ownProp.match.params.listingId]
})

const mapDispatchToProps = dispatch => ({
  getUserListings: (userId) => dispatch(getUserListings(userId)),
  updateListing: () => dispatch(updateListing()),
  deleteListing: (listingId) => dispatch(deleteListing(listingId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProItem);