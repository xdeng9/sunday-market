import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import './app.css';
import Footer from './footer/Footer';

const App = () => {
    return (
        <div className="app-container">
           <NavBarContainer/>
            <Footer />
        </div>
    )
}

export default App;