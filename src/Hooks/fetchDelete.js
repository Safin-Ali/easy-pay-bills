import axios from 'axios';

const fetchDelete = async (path,body,header={}) => {
    return axios.delete(path,body,{headers:header})
    .then(res => res.data)
    .catch(e => e.response.data.message || e.message);
};

export default fetchDelete;