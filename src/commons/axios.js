import _axios from 'axios';
const axios= baseURL=>{
    const instance =_axios.create({
        baseURL:baseURL || 'http://127.0.0.1:8000/',
        timeout:6000
    });
    return instance;
}

export {axios};
export default axios();