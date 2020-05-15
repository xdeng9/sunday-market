import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { getListing } from '../../actions/listing_actions';

const mapStateToProps = state => ({
    user: state.session.user 
})

const mapDispatchToProps = dispatch => ({
    getListing: listingId => dispatch(getListing(listingId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);