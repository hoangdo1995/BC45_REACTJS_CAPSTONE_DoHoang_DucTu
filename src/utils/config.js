import axios from "axios";
import { history } from "..";

const USER_LOGIN = 'user_login';
const TOKEN = 'accessToken';
const DOMAIN = 'https://shop.cyberlearn.vn';
const PHONE_VN_REGEX = /(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/;
const NAME_REGEX = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm;

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
export {USER_LOGIN,TOKEN,DOMAIN,PHONE_VN_REGEX,NAME_REGEX,PASSWORD_REGEX};

export const http = axios.create({
    baseURL:'https://shop.cyberlearn.vn',
    timeout:3000
});

http.interceptors.request.use((req)=>{
    req.headers = {...req.headers,
        TokenCyberSoft:
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NSIsIkhldEhhblN0cmluZyI6IjIwLzExLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMDQzODQwMDAwMCIsIm5iZiI6MTY3MjA3NDAwMCwiZXhwIjoxNzAwNTg2MDAwfQ.nqyOmcwBXyqINN0ROA_xI8TKx0Jk05_lwRy4Cdv0j_8`,
        option:'',
    }
    if(getStorageJson(USER_LOGIN)?.accessToken){
        req.headers = {...req.headers,
            Authorization:`Bearer ${getStorageJson(USER_LOGIN).accessToken}`
        }
    }
    return req
})

http.interceptors.response.use((response)=>{
    console.log(response?.data,'response');
    return response;
},error=>{
    if(error.response?.status){
        console.log(error.response.status,'status');
        if(error.response.status === 404){
            console.log('404 status');
            history.push('/login');
        }
    }
    return error;
})