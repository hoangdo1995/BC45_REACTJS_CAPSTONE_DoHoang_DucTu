import axios from "axios";
import { json } from "react-router-dom";
import { history } from "..";

const USER_LOGIN = 'user_login';
const TOKEN = 'accessToken';
const DOMAIN = 'https://shop.cyberlearn.vn';

const config = {
    getStorageJson:(name)=>{
        if(localStorage.getItem(name)){
            const itemJson = localStorage.getItem(name);
            const itemObject = JSON.parse(itemJson);
            return itemObject;
        }
        return null;
    },
    setStorageJson:(name,data)=>{
        const itemJson = JSON.stringify(data);
        localStorage.setItem(name,itemJson);
    }
}

export const {getStorageJson,setStorageJson} = config;
export {USER_LOGIN,TOKEN,DOMAIN};

export const http = axios.create({
    baseURL:'https://shop.cyberlearn.vn',
    timeout:3000
});

// cấu hình interceptor cấu hình cho request (api gửi đi)
http.interceptors.request.use((req)=>{
    req.headers = {...req.headers,
        TokenCyberSoft:
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjIwLzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMDQzODQwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAwNTg2MDAwfQ.nqyOmcwBXyqINN0ROA_xI8TKx0Jk05_lwRy4Cdv0j_8`,
        option:''
    }
    if(getStorageJson(USER_LOGIN)){
        req.headers = {...req.headers,
            Authorization:`Bearer ${getStorageJson(USER_LOGIN).accessToken}`
        }
    }
    return req
})

//cấu hình interceptor cho response nhận về
http.interceptors.response.use((response)=>{
    console.log(response,'response');
    return response;
},error=>{
    if(error.response?.status){
        console.log(error.response.status,'status');
        if(error.response.status === 404){
            console.log('404 status');
            history.push('register');
        }
    }
})