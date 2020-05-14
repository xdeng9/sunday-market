import React from 'react';
import './listing.css';
import { Link } from 'react-router-dom';

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
                <div className="listing-grid-container">
                    {listings.map((listing, idx) => {
                        return (
                            <Link key={idx} className="listing-link" to={`/listing/${listing._id}`}>
                                <figure key={idx} className="listing-item-container">
                                    <img src={listing.photoUrl} className="listing-thumbnail" alt="" />
                                    <figcaption>
                                        {listing.title}
                                    </figcaption>
                                </figure>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ListingIndex;