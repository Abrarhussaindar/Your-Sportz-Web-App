import axios from "axios";

export default axios.create({
    baseURL: 'https://yoursportzbackend.azurewebsites.net/api'
});