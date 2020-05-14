import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import './app.css';
import Footer from './footer/Footer';
import Main from './profile/Main';
import ProItemContainer from './profile/proitem_container';
import { ProtectedRoute  } from '../util/route_util';
import ListIndexContainer from './listing/listing_index_container';
import ListShowContainer from './listing/listing_show_container';

const App = () => {
    return (
        <div className="app-container">
           <NavBarContainer/>
           <div className="nav-divider"></div>
           <Switch>
                <Route exact path="/" component={ListIndexContainer}/>
                <Route exact path="/listing/:listingId" component={ListShowContainer}/>
                {/* <ProtectedRoute path={`/user/:id`} component={Main} /> */}
                <ProtectedRoute path={`/user/:id`} component={ProItemContainer} />
           </Switch>
           <Footer />
        </div>
    )
}

export default App;