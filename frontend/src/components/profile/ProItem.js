import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './proItem.css';

class ProItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      title: "",
      description: "",
      price: "",
      userListings: [],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.singleFileChangedHandler = this.singleFileChangedHandler.bind(this);
    this.singleFileUploadHandler = this.singleFileUploadHandler.bind(this);
  }

  componentDidMount() {
    this.props
      .getUserListings(this.props.match.params.userId)
      .then((userListings) =>
        this.setState({ userListings: userListings.listings })
      );
  }

  singleFileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };


  singleFileUploadHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    // If file selected
    if (this.state.selectedFile) {
      data.append("title", this.state.title);
      data.append("description", this.state.description);
      data.append("price", this.state.price);
      data.append(
        "listingImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );

      this.props.createListing(data)
      .then(res => {
          this.setState({
            userListings: [res.listing, ...this.state.userListings],
            title: "",
            description: "",
            price: "",
            selectedFile: null,
          });
      })
    }
  };

  handleEdit(event) {
    event.preventDefault();
    let edit = {
      photoUrl: this.state.photoUrl,
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
    };
    this.props.updateListing(edit, this.props.history);
  }

  deleteItem(e, listingId) {
    e.preventDefault();
    let newUserListings = this.state.userListings.filter(
      (listing) => listing._id !== listingId
    );
    this.props.deleteListing(listingId).then(() => {
      this.setState({ userListings: newUserListings });
    });
  }

  update(field) {
    return (event) => {
      this.setState({ [field]: event.target.value });
    };
  }

  render() {
    console.log(this.state.userListings);
    let listings = this.state.userListings;
    if (listings.length === 0) {
      return null;
    }
    return (
      <div className="box1">
        <form className="create-form">
          <label className="create-title">
            <span>Title</span>
            <input
              type="text"
              onChange={this.update("title")}
              value={this.state.title}
            ></input>
          </label>
          <label className="create-description">
            <span>Description</span>
            <textarea
              type="text"
              onChange={this.update("description")}
              value={this.state.description}
            ></textarea>
          </label>
          <label className="create-price">
            <span>Price</span>
            <input
              type="text"
              onChange={this.update("price")}
              value={this.state.price}
            ></input>
          </label>
          <label className="create-image">
            <span>Image</span>
            <input type="file" onChange={this.singleFileChangedHandler} />
          </label>
          <button className="create-submit" onClick={this.singleFileUploadHandler}>Create</button>
        </form>

        {listings.map((listing, idx) => {
          return (
            <Link key={idx} className="link" to={`/listing/${listing._id}`}>
              <div key={idx} className="food-pic-con">
                <img src={listing.photoUrl} className="food-pic" alt="" />
              </div>
              <div className="info">
                <div className="title">{listing.title}</div>

                <div className="description">Description:</div>
                <div className="about">{listing.description}</div>
                <div className="price">$ {listing.price}</div>
              </div>

              <button
                className="delete-btn"
                onClick={(e) => this.deleteItem(e, listing._id)}
              >
                Delete
              </button>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default withRouter(ProItem);