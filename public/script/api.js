import axios from 'axios';
import { isLoading, isLoaded } from './universal/loading';

const url= 'https://jsonplaceholder.typicode.com';
export async function getApi(route){
    isLoading('#main')
    const res = await axios.get(`${url}${route}`, {})
    isLoaded('#main')
    return res.data
}