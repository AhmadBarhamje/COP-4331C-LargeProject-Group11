import axios from "axios"
axios.defaults.withCredentials = true;

const app_name = 'cop4331-group11-large';
//const app_name = 'group11largeproject-dev';
var url;
if (process.env.NODE_ENV === 'production') {
    url = 'https://' + process.env.REACT_APP_NAME +  '.herokuapp.com/api';
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
        config.headers['content-type'] = 'application/json; charset=utf-8'
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
            return axios.get(`${url}/auth/refresh`)
            .then((res) => {
                if (res.status === 200) {
                    let accessToken = JSON.stringify(res.data.accessToken);
                    localStorage.setItem('accessToken', accessToken);
                    console.log(accessToken);
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
    logout: (body) => {
        return axios.delete(`${url}/auth/logout`, {data: body});
    },
    protected: () => {
        return axios.get(`${url}/protected`);
    }
};

export default api;