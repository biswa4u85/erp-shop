import { toast } from 'react-toastify';
import axios from 'axios';
import Config from "../common/Config";

const axiosAPI = axios.create({
    baseURL: Config.hostUrl,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
});

export function apiPostCall(path, params, token) {
    let headers = {}
    if (token) {
        headers['X-Frappe-CSRF-Token'] = token
    } else {
        headers.Authorization = Config.token
    }
    return axiosAPI.post(path, params, { headers: headers })
        .then((response) => {
            return response?.data?.message ? response.data.message : []
        })
        .catch((error) => {
            let errors = null
            if (error.response) {
                errors = error.response
            } else if (error.request) {
                errors = error.request
            } else {
                errors = error.message
            }
            toast(errors.statusText);
        });
}

export function apiGetCall(path, params, token) {
    let headers = {}
    if (token) {
        headers['X-Frappe-CSRF-Token'] = token
    } else {
        headers.Authorization = Config.token
    }
    return axiosAPI.get(path, { headers: headers })
        .then((response) => {
            return response?.data ? response.data : []
        })
        .catch((error) => {
            let errors = null
            if (error.response) {
                errors = error.response
            } else if (error.request) {
                errors = error.request
            } else {
                errors = error.message
            }
            toast(errors.statusText);
        });
}