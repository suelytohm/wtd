import axios from "axios";


const api = axios.create({
    baseURL: "https://www.boredapi.com/api",
});

export default api;

// axios.get('/activity/')
// .then((response) => {
//     console.log(response)
// })