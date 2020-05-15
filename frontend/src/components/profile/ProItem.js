import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './proItem.css'
class ProItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoUrl: [],
            title: "",
            description: "",
            price: "",
            userListings: []
        };
        this.deleteItem = this.deleteItem.bind(this)

    }
    componentDidMount() {
        this.props.getUserListings(this.props.match.params.userId)
            .then(userListings => this.setState({userListings: userListings.listings}));
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

    deleteItem(e, listingId) {
        e.preventDefault();
        let newUserListings = this.state.userListings.filter(
            listing => listing._id !== listingId
        );
        this.props.deleteListing(listingId).then(() => {
            this.setState({ userListings: newUserListings })
        })
    }

    update(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        }
    }


    render() {
        console.log(this.state.userListings)
        let listings = this.state.userListings;
        if (listings.length === 0) {
            return null;
        }
        return (
            <div className="box1">

                {listings.map((listing, idx) => {
                    return (

                        <Link key={idx} className="link" to={`/listing/${listing._id}`}>
                            <div key={idx} className="food-pic-con" >
                                <img src={listing.photoUrl} className="food-pic" alt="" />
                            </div>
                            <div className="info">
                                <div className="title">
                                    {listing.title}
                                </div>

                                <div className="description">
                                    Description:
                                            </div>
                                <div className="about">
                                    {listing.description}

                                </div>
                                <div className="price">
                                    $ {listing.price}
                                </div>
                            </div>

                            <button className="delete-btn" onClick={(e) => this.deleteItem(e, listing._id)}>Delete</button>
                        </Link>
                    )
                })
                }
            </div>
        )
    }
}

export default withRouter(ProItem);