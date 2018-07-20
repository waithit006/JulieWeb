import * as service from '../services/authentication'

export const fetchRegisterMembers = (username,email,password) => dispatch =>(
service.fetchRegisterMembers(username,email,password).then(res=>{
    console.log(res)
})
)