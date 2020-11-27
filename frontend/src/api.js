import axios from "axios"
axios.defaults.withCredentials = true;

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
    },
    forgotpass: (body) => {
        return axios.post(`${url}/auth/forgotpass`, body);
    },
    changepass: (body) => {
        return axios.post(`${url}/auth/changepass`, body);
    },
    // Schedule and availability endpoints below
    getAvailability: () => { // Returns the user's availability
        return axios.get(`${url}/getAvailability`);
    },
    setAvailability: (body) => { // Sets the user's availability, need param "newAvailability"
        return axios.post(`${url}/setAvailability`, body);
    },
    getAllSchedules: () => { // Returns list of schedules user is in
        return axios.get(`${url}/getAllSchedules`);
    },
    getSchedule: (name) => { // Gets data for a specific schedule, pass in a string (not json) of the schedule ex: cnaas.sched1
        return axios.get(`${url}/getSchedule?name=${name}`);
    },
    createSchedule: (body) => { // Create a new schedule, user will be in this schedule by default, need param "name"
        return axios.post(`${url}/createSchedule`, body);
    },
    addMember: (body) => { // Add a member to a schedule, need params "name" and "affectedUser" 
        return axios.post(`${url}/addMember`, body);
    },
    removeMember: (body) => { // Remove a member from a schedule, need params "name" and "affectedUser" 
        return axios.delete(`${url}/removeMember`, {data: body});
    },
    deleteSchedule: (body) => { // Deletes a schedule, need param "name"
        return axios.delete(`${url}/deleteSchedule`, {data: body});
    }
};

export default api;