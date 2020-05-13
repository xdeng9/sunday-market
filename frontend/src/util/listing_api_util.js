import axios from 'axios';

export const fetchPost = postId => {
    return axios.get(`/api/listings/${postId}`);
}

export const fetchPosts = () => {
    return axios.get('/api/listings');
}

export const fetchUserPosts = userId => {
    return axios.get(`/api/listings/user/${userId}`);
}

export const createPost = data => {
    return axios.post('/api/lists/', data);
}

export const deletePost = postId => {
    return axios.delete(`/api/lists/${postId}`);
}

export const updatePost = (postId, data) => {
    return axios.patch(`/api/lists/${postId}`, data);
}