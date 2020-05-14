import React from 'react';

class ListingShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getListing(this.props.match.params.listingId)
            .then(res => this.setState( res.listing ));
    }

    render() {
        if (Object.values(this.state) === 0) return null;
        return (
            <div className="listing-show-container">
                <div className="listing-show-content">
                    <div className="listing-show-left-box">
                        <h2 className="listing-show-header">
                            {this.state.title}
                        </h2>
                        <div className="listing-show-image">
                            <img src={this.state.photoUrl} alt="" />
                        </div>
                    </div>
                    <div className="listing-show-right-box">

                    </div>
                </div>
            </div>
        )
    }
}

export default ListingShow;