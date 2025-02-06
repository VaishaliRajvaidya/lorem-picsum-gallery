import axios from 'axios';

const instance = axios.create({
    baseURL: "https://picsum.photos/v2/list"
});

export default instance;
