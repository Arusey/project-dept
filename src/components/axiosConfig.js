import axios from 'axios';

export const axiosDefault = axios.create({
    baseURL:
    'https://cors-anywhere.herokuapp.com/https://hudumammu.herokuapp.com/',
    headers: {
        "Content-Type": "application/json"
    }
})

const token = localStorage.getItem("token")

export const axiosWithToken = axios.create({
    baseURL:
    'https://cors-anywhere.herokuapp.com/https://hudumammu.herokuapp.com/',
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }
})