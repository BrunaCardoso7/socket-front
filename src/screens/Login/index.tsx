import { View, Text, Alert } from "react-native";
import Input from "./components/Input";
import { useState } from "react";
import Button from "./components/button";
import ButtonLink from "./components/buttonLink";
import { signinService } from "../../service/signin.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

type UserProps = {
    username: string
    password: string
}


export default function LoginApp () {
    const [userData, setUserData] = useState<UserProps>({
        username: '',
        password: ''
    })  
    
    
    const handleUserData = (key: keyof UserProps, value: string) => {
        setUserData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }
    
    
    const navigation = useNavigation()                   

    const handleSubmit = async () => {
        try {
            const response = await signinService(userData)
            console.log(response?.data)
            const token = response?.data.token
            await AsyncStorage.setItem('token', token)
            navigation.navigate("chat")
            Alert.alert('sucesso', `login feito com sucesso`)
        } catch (error) {
            console.error(error, "error no componente de login ")
        }
    }

    return(
        <View className="flex-1 justify-center items-center gap-10">
            <Text className="font-bold text-2xl">CHATSOCKET</Text>
            <View className="flex-col justify-center items-center w-full gap-4">
                <Input
                    value={userData.username}
                    placeholder="Email" 
                    onChangeText={(text: string)=>handleUserData("username", text)}
                />
                <Input 
                    value={userData.password}
                    placeholder="Password" 
                    onChangeText={(text: string)=>handleUserData("password", text)}
                />
            </View>
            <View>
            <View className="flex-col justify-center items-center">
                <Button onPress={handleSubmit}>
                    <Button.Text>
                        <Button.Text>
                            Entrar
                        </Button.Text>
                    </Button.Text>
                </Button>
                <ButtonLink screenName="register">
                    Não tem uma conta ainda?
                </ButtonLink>
            </View>
            </View>
        </View>
    )
}