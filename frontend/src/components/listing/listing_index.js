import React from 'react';
import './listing.css';

class ListingIndex extends React.Component {

    componentDidMount() {
        this.props.getListings();
    }

    render() {
        let { listings } = this.props;
        return (
            <div className="listing-index-container">
                <div className="listing-header">
                    <p>Popular right now</p>
                </div>
                <ul>
                    {listings.map(listing => {
                        return (
                            <li key={listing.id}>

                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ListingIndex;