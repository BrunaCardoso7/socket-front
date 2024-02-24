import { View, Text, Alert } from "react-native";
import Input from "./components/Input";
import { useState } from "react";
import Button from "./components/button";
import ButtonLink from "./components/buttonLink";
import { signupService } from "../../service/signup.service";
import { useNavigation } from "@react-navigation/native";

type UserProps = {
    username: string
    name: string
    password: string
}

export default function Register () {
    const [userData, setUserData] = useState<UserProps>({
        username: '',
        name: '',
        password: ''
    }) 
     
    const navigation = useNavigation()

    const handleUserData = (key: keyof UserProps, value: string) => {
        setUserData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }
    
    const handleSubmit = async () => {
        console.log(userData)
        try {
            const response = await signupService(userData)
            setUserData(response?.data);
            // navigation.navigate("chat")
            Alert.alert('sucesso', 'cadastrado com sucesso')
            // navigation.navigate('login')
        } catch (error) {
            console.error("deu ruim: ", error)
            Alert.alert('falha', 'erro com de reposta na api')
        }
    }                                                                                                           

    return(
        <View className="flex-1 justify-center items-center gap-10">
        <Text className="font-bold text-2xl">CHATSOCKET</Text>
        <View className="flex-col justify-center items-center w-full gap-4">
            <Input
                value={userData.username}
                placeholder="username" 
                onChangeText={(text: string)=>handleUserData("username", text)}
            />
            <Input
                value={userData.name}
                placeholder="email" 
                onChangeText={(text: string)=>handleUserData("name", text)}
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
                        Registre-se
                    </Button.Text>
                </Button.Text>
            </Button>
            <ButtonLink screenName="login">
                Já é cadastrado?
            </ButtonLink>
        </View>
        </View>
    </View>
    )
}