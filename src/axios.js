import axios from 'axios';

const instance = axios.create({
    baseURL: ' http://localhost:3666', // 设置请求的基础URL
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // 设置允许跨域访问的域名，这里设置为允许所有域名访问
    }
});


export default instance;
