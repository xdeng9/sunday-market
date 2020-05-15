import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments 
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment 
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const fetchComments = listingId => dispatch => CommentAPIUtil.fetchComments(listingId)
    .then(comments => dispatch(receiveComments(comments.data)));

export const createComment = comment => dispatch => CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment.data)));

export const deleteComment = commentId => dispatch => CommentAPIUtil.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment.data._id)));

export const updateComment = (commentId, comment) => dispatch => CommentAPIUtil.updateComment(commentId, comment)
    .then(comment => dispatch(receiveComment(comment.data)));