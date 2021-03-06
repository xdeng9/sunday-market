import React from 'react';
import { withRouter } from 'react-router-dom';
import './comment.css'

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = { body: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.match.params.listingId);
    }

    handleChange(e) {
        this.setState({ body: e.currentTarget.value });
    }

    handleDelete(e, id) {
        e.preventDefault();
        if (this.props.user.id === undefined) {
            this.props.history.push('/login');
            return;
        } 
        this.props.deleteComment(id);
    }

    handleComment(e) {
        e.preventDefault();
        if (this.props.user.id === undefined) this.props.history.push('/login');
        if (this.state.body.trim().length === 0) return;
        let commentField = document.getElementById("comment-input");
        commentField.value = '';
        this.setState({ body: '' })
        this.props.createComment({
            content: this.state.body,
            listingId: this.props.match.params.listingId
        })
    }

    render() {
        const { comments } = this.props;
        return (
            <div className="comments-container">
                <h1 className="comments-header">
                    {comments.length} Comments
                </h1>
                <form className="comment-form" onSubmit={this.handleComment}>
                    <input
                        className="comment-field"
                        id="comment-input"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Add a public comment..."
                    />
                    <button>Comment</button>
                </form>
                <ul className="comment-list-container">
                    {comments.map(comment => {
                        return (
                            <li key={comment._id} className="comment-item">
                                <div className="comment-item-inline">
                                    <p className="comment-content">{comment.content}</p>
                                    <button className="comment-del-btn" onClick={(e) => this.handleDelete(e, comment._id)}>Delete</button>
                                </div>
                                <div className="breakline"></div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default withRouter(Comment);