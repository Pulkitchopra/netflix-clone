import axios from "axios";

const netflix = axios.create({
    
    baseURL: 'https://api.themoviedb.org/3',

});


export default netflix