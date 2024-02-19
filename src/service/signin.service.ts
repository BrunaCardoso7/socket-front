import axios from "axios";

const baseUrl = 'https://chatsocket-d9e7.onrender.com'

type signinServiceProps = {
    email: string
    password: string
}

export const signinService = (data: signinServiceProps) => {
    try {
        const { email, password } = data
    
        if( !email && !password){
            console.log("falta dados")
        }

        const formData = new FormData()
    
        formData.append("email", email)
        formData.append("password", password)
    
        return axios.post(`${baseUrl}/user/signin`, formData)
    } catch (error) {
        console.error("erro na comunicação com api: ",error)
    }
}