import React from 'react';
import { fetchPost, updatePost } from '../../util/listing_api_util';

class ProItemEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            price: "",
            errors: []
        };

        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(e) {
        e.preventDefault();
        if (!this.state.title.trim() || !this.state.description.trim() || !this.state.price.trim()) {
            this.setState({ errors: ['Input fields can\'t be empty'] });
            return;
        } else {
            updatePost(this.props.match.params.listingId, {
                title: this.state.title,
                description: this.state.description,
                price: this.state.price
            });
            this.props.history.push('/');
        }
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        fetchPost(this.props.match.params.listingId).then(
            res => {
                let listing = res.data.listing;
                console.log(listing)
                this.setState({ 
                    title: listing.title,
                    description: listing.description,
                    price: listing.price.toString()
                })
            }
        );
    }

    update(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        };
    }

    renderErrors() {
        return (
            <ul className="create-errors">
                {(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="box1" style={{marginTop: -50}}>
                <h2>Edit Your Product</h2>
                <form className="create-form">
                    <label className="create-title">
                        <span>Title</span>
                        <input
                            className="create-input"
                            type="text"
                            onChange={this.update("title")}
                            value={this.state.title}
                        ></input>
                    </label>
                    <label className="create-description">
                        <span>Description</span>
                        <textarea
                            className="create-input"
                            type="text"
                            onChange={this.update("description")}
                            value={this.state.description}
                        ></textarea>
                    </label>
                    <label className="create-price">
                        <span>Price</span>
                        <div>
                            $<input
                                className="create-input"
                                type="number" maxLength="4"
                                onChange={this.update("price")}
                                value={this.state.price}
                            ></input>
                        </div>
                    </label>
                    {/* <label className="create-image">
                        <span>Image</span>
                        <input className="create-input" id="file-input" type="file" onChange={this.singleFileChangedHandler} />
                    </label> */}
                    <button className="create-submit" onClick={this.handleEdit}>Apply Changes</button>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default ProItemEdit;