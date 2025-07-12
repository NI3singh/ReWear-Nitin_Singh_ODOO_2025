import axios from '../api/axiosInstance';

export const getApprovedItems = () =>
    axios.get('/items').then(res => res.data.items);

export const getItemById = id =>
    axios.get(`/items/${id}`).then(res => res.data.item);

export const createItem = data => {
    // data is a FormData instance
    return axios.post('/items', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => res.data);
};

export const getMyItems = () =>
    axios.get('/items/my').then(res => res.data.items);
