import React from 'react';
import './listing_show.css'
import CommentContainer from '../comment/comment_container';

class ListingShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getListing(this.props.match.params.listingId)
            .then(res => this.setState(res.listing));
    }

    render() {
        if (Object.values(this.state).length === 0) return null;
        return (
            <div className="listing-show-container">
                <div className="listing-show-content">
                    <div className="listing-show-left-box2">
                        <h2 className="listing-show-header">
                            {this.state.listing.title}
                        </h2>
                        <div className="listing-show-image2">
                            <img id="show-image" src={this.state.listing.photoUrl} alt="" />
                        </div>
                        <div className="breakline"></div>
                        <CommentContainer />
                    </div>
                    <div className="listing-show-right-box2">
                        <iframe className="iframe" title="location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25232.70193328276!2d-122.44717164177793!3d37.76454079709958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1589503135730!5m2!1sen!2sus"
                        ></iframe>
                        <div className="listing-show-description2">
                            <h1 className="about-2"> Description</h1>
                            <p>
                                {this.state.listing.description}
                            </p>
                        </div>

                        <div className="user-info">
                            <div className="name-box">
                                <i className="fa fa-address-card"></i>
                                <div className="name">{this.state.user.firstName}  {this.state.user.lastName}</div>
                            </div>
                            <div className="phone-box">
                                <i className="fa fa-mobile-phone"></i>
                                <div className="phoneNumber"> {this.state.user.phoneNumber}</div>
                            </div>
                            <div className="zipcode-box">
                                <i className="fa fa-map"></i>
                                <div className="zipcode">{this.state.user.zipCode}</div>
                            </div>
                            <div className="email-box">
                                <i className="fa fa-send-o"></i>
                                <div className="email"> {this.state.user.email} </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingShow;