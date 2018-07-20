import axios from 'axios';


export function fetchRegisterMembers(username,email,password){
    return axios.post('http://localhost:3080/user/register', {
        username: username,
        email: email,
        password: password
    })
}