import axios from '../api/axiosInstance';

export const getPendingItems = () =>
    axios.get('/admin/items/pending').then(res => res.data.items);

export const approveItem = id =>
    axios.post(`/admin/items/${id}/approve`).then(res => res.data);

export const rejectItem = id =>
    axios.post(`/admin/items/${id}/reject`).then(res => res.data);
