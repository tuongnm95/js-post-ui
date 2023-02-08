import axiosClinet from './axiosClient.js';

const postApi = {
  getAll(params) {
    const url = `/posts`;
    return axiosClinet.get(url, { params, baseURL: 'https://abc.com' });
  },

  getById(id) {
    const url = `/posts/${id}`;
    return axiosClinet.get(url);
  },

  add(data) {
    const url = `/posts`;
    return axiosClinet.post(url, data);
  },

  update(data) {
    const url = `/posts/${data.id}`;
    return axiosClinet.patch(url, data);
  },

  remove(id) {
    const url = `/posts/${id}`;
    return axiosClinet.post(url, data);
  },
};

export default postApi;
