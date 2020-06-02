import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { searchListing } from '../../actions/listing_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user
});

export default connect(
  mapStateToProps,
  { logout, searchListing}
)(NavBar);