import axios from "axios";

const BASE_API_URL='http://localhost:8080/api/emp/getAllEmployee';

export const listEmployees = () => {
    return axios.get(BASE_API_URL);
}