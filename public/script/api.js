import axios from 'axios';
const url= 'https://jsonplaceholder.typicode.com';
export async function getApi(route){
    const res = await axios.get(`${url}${route}`, {})
    return res.data
}