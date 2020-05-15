import { connect } from 'react-redux';
import Comment from './comment';
import { fetchComments, createComment, deleteComment, updateComment }
from '../../actions/comment_actions';

const mapStateToProps = state => ({
    comments: state.comments,
    user: state.session.user 
})

const mapDispatchToProps = dispatch => ({
    fetchComments: listingId => dispatch(fetchComments(listingId)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    updateComment: (commentId, comment) => dispatch(updateComment(commentId, comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment);