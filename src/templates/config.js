import { json } from "react-router-dom";

const USER_LOGIN = 'user_login';

const getStorageJson = (item)=>{
    if(localStorage.getItem(item)){
        const itemJson = localStorage.getItem(item);
        const itemObject = JSON.parse(itemJson);
        return itemObject;
    }
    return null;
}
const setStorageJson = (item,data)=>{
    const itemJson = JSON.stringify(item);
    localStorage.setItem(itemJson,data);
}

export {getStorageJson,USER_LOGIN};