import axios from 'axios';

const fetchPatch = async (path,data,header={}) => {
    return axios.patch(path,data,{headers:header})
    .then(res => res.data)
    .catch(e => e.response.data.message || e.message);
};

export default fetchPatch;