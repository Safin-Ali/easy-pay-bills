import axios from 'axios';

const fetchPost = async (path,data,header={}) => {
    return axios.post(path,data,{headers:header})
    .then(res => res.data)
    .catch(e => e.response.data.message || e.message);
};

export default fetchPost;