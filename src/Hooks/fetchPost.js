import axios from 'axios';

const fetchPost = async (path,data) => {
    return axios.post(path,data)
    .then(res => res.data)
    .catch(e => e.response.data.message || e.message);
};

export default fetchPost;