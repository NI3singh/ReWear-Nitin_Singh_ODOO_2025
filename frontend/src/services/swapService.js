import axios from '../api/axiosInstance';

export const requestSwap = itemId =>
    axios.post('/swaps/request', { itemId }).then(res => res.data);

export const redeemViaPoints = itemId =>
    axios.post('/swaps/redeem', { itemId }).then(res => res.data);

export const getMySwaps = () =>
    axios.get('/swaps/my').then(res => res.data.swaps);
