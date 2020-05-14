import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
class ProItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoUrl: [],
            title: "",
            description: "",
            price: ""
        };

    }
    componentDidMount() {
        
        this.props.getUserListings(this.props.match.params.userId);

    }

    handleEdit(event) {
        event.preventDefault();
        let edit = {
            photoUrl: this.state.photoUrl,
            title: this.state.title,
            description: this.state.description,
            price: this.state.price
        }
        this.props.updateListing(edit, this.props.history)
    }

    handleDelete(listingId) {
        return event => {
            this.props.deleteListing(listingId)
        }

    }

    update(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        }
    }


    render() {
        let { listings } = this.props;
        if (listings === undefined) {
            return "a"
        }
        return (
            <div>
                <div className="descrip">
                    {listings.map((listing, idx) => {
                        return (
                            <Link key={idx} className="listing-link" to={`/listing/${listing._id}`}>
                                <figure key={idx} className="listing-item-container">
                                    <img src={listing.photoUrl} className="food-pic" alt="" />
                                    <h1>
                                        Description:
                                    </h1>
                                    <p>
                                        {listing.description}
                                    </p>
                                </figure>
                            </Link>
                        )
                    })
                    }
                </div>

            </div>
        )
    }
}

export default withRouter(ProItem);