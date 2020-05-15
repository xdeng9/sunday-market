import React from 'react';
import { withRouter } from 'react-router-dom';
import './comment.css'

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = { body: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.match.params.listingId);
    }

    handleChange(e) {
        this.setState({ body: e.currentTarget.value });
    }

    handleComment(e) {
        e.preventDefault();
        if (this.props.user.id === undefined) return;
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
                                {comment.content}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default withRouter(Comment);