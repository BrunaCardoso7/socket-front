import axios from "axios";
// import { AsyncStorage } from 'react-native'

const baseUrl = 'https://chatsocket-d9e7.onrender.com'

type UserProps = {
    username: string
    name: string
    password: string
}

export const signupService = async (data: UserProps) => {
    try {
        const {name, username, password} = data

        if(!name && !username && !password){
            console.log('falta dados')
        }

        return await axios.post(`${baseUrl}/user/register`, data)

    } catch (error) {
        console.error("erro na conexão com a api: ", error)
    }
}