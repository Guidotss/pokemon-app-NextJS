import axios from 'axios';





const pokeApi = axios.create({
    responseEncoding: 'utf8',
    baseURL: 'https://pokeapi.co/api/v2',
});




export default pokeApi;



