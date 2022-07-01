import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/`);

    const items = response.data;

    console.log(items);

    return items;
  } catch (errors) {
    console.error(errors);
  }
};
getData();