import React from 'react';

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
                    <div className="listing-show-left-box">
                        <h2 className="listing-show-header">
                            {this.state.listing.title}
                        </h2>
                        <div className="listing-show-image">
                            <img src={this.state.listing.photoUrl} alt="" />
                        </div>
                        <div className="listing-show-description">
                            <p>
                                {this.state.listing.description}
                            </p>
                        </div>
                    </div>
                    <div className="listing-show-right-box">
                        <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25232.70193328276!2d-122.44717164177793!3d37.76454079709958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1589503135730!5m2!1sen!2sus" 
                         ></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListingShow;