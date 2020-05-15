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

// export const createPost = data => {
//     return axios.post('/api/listings/', data);
// }

export const createPost = (data) => {
  return axios.post("/api/listings/", data, {
    headers: {
      accept: "application/json",
      "Accept-Language": "en-US,en;q=0.8",
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
    },
  });
};

export const deletePost = postId => {
    return axios.delete(`/api/listings/${postId}`);
}

export const updatePost = (postId, data) => {
    return axios.patch(`/api/listings/${postId}`, data);
}