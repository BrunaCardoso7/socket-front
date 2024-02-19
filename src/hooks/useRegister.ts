import { useNavigation } from "@react-navigation/native"
import { Alert } from "react-native"
import { signupService } from "../service/signup.service"

const navigation = useNavigation()

type UserProps = {
    username: string
    name: string
    password: string
    setUserData: React.Dispatch<React.SetStateAction<UserProps>>
}


export const useRegister = async (data: UserProps) => {
    try {
        const response = await signupService(data)
        data.setUserData(response?.data);
        Alert.alert('sucesso', 'cadastrado com sucesso')
        // navigation.navigate('login')
    } catch (error) {
        console.error("deu ruim: ", error)
        Alert.alert('falha', 'erro com de reposta na api')
    }
}