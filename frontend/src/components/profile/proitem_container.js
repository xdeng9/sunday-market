import { connect } from 'react-redux';
import ProItem from './ProItem';
import { getUserListings } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id,
  listings: state.listings
})

const mapDispatchToProps = dispatch => ({
  getUserListings: (userId) => dispatch(getUserListings(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProItem);