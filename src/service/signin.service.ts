import axios from "axios";

const baseUrl = 'https://chatsocket-d9e7.onrender.com'

type signinServiceProps = {
    username: string
    password: string
}

export const signinService = (data: signinServiceProps) => {
    try {
        const { username, password } = data
    
        if( !username && !password){
            console.log("falta dados")
        }

        return axios.post(`${baseUrl}/user/signin`, data)
        
    } catch (error) {
        console.error("erro na comunicação com api: ",error)
    }
}