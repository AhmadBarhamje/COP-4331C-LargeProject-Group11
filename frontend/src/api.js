import axios from "axios"

const app_name = 'cop4331-group11-large'
var url;
if (process.env.NODE_ENV === 'production') {
    url = 'https://' + app_name +  '.herokuapp.com/api';
}
else {        
    url = 'http://localhost:5000/api';
}

axios.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['x-auth-token'] = accessToken;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        const originalRequest = error.config;

        if (
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            return axios.post(`${url}/auth/refresh`)
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem('accessToken', res.data.accessToken);
                    console.log('Refreshed access token.')
                    return axios(originalRequest);
                }
            });
        }
        return Promise.reject(error);
    }
)

const api = {
    signup: (body) => {
        return axios.post(`${url}/auth/signup`, body);
    },
    login: (body) => {
        return axios.post(`${url}/auth/login`, body);
    },
    refresh: () => {
        return axios.get(`${url}/auth/refresh`);
    },
    logout: () => {
        return axios.delete(`${url}/auth/logout`);
    },
    protected: () => {
        return axios.get(`${url}/auth/signup`);
    }
};

export default api;