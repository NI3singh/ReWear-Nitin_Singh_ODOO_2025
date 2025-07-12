import axiosInstance from '../api/axiosInstance';

export const registerUser = async (data) => {
    const res = await axiosInstance.post('/auth/register', data);
    return res.data;
};

export const loginUser = async (data) => {
    const res = await axiosInstance.post('/auth/login', data);
    if (res.data.user) localStorage.setItem('rewear_user', JSON.stringify(res.data.user));
    if (res.data.token) localStorage.setItem('auth_token', JSON.stringify(res.data.token));

    return res.data;
};
