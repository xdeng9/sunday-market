import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import './app.css';
import Footer from './footer/Footer';
import Main from './profile/Main';
import { ProtectedRoute  } from '../util/route_util';
import ListIndexContainer from './listing/listing_index_container';

const App = () => {
    return (
        <div className="app-container">
           <NavBarContainer/>
           <div className="nav-divider"></div>
           <Switch>
                <Route exact path="/" component={ListIndexContainer}/>
                <Route path={`/user/:id`} component={Main} />
           </Switch>
           <Footer />
        </div>
    )
}

export default App;