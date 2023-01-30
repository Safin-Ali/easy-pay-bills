import axios from 'axios';

const fetchPatch = async (path,data) => {
    return axios.patch(path,data)
    .then(res => res.data)
    .catch(e => e.response.data.message || e.message);
};

export default fetchPatch;