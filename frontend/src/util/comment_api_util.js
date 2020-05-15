import axios from 'axios';

export const fetchComments = postId => {
    return axios.get(`/api/comments/listing/${postId}`);
}

export const createComment = comment => {
    return axios.post('/api/comments', comment);
}

export const deleteComment = commentId => {
    return axios.delete(`/api/comments/${commentId}`);
}

export const updateComment = (commentId, comment) => {
    return axios.patch(`/api/comments/${commentId}`, comment);
}