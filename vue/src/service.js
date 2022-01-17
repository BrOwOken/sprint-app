const axios = require('axios');

export async function getProject() {

    console.log("api call")
    const response = await axios.get('http://localhost:3000/');
    return response.data;
}

export async function createUser(data) {
    const response = await axios.post(`/api/user`, {user: data});
    return response.data;
}