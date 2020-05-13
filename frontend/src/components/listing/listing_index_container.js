import { connect } from 'react-redux';
import ListingIndex from './listing_index';
import { getListings } from '../../actions/listing_actions';

const mapStateToProps = state => ({
    user: state.session.user,
    listings: state.listings 
})

const mapDispatchToProps = dispatch => ({
    getListings: () => dispatch(getListings())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);