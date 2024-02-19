import { View, Text, Alert } from "react-native";
import Input from "./components/Input";
import { useState } from "react";
import Button from "./components/button";
import ButtonLink from "./components/buttonLink";
import { signinService } from "../../service/signin.service";



type UserProps = {
    email: string
    password: string
}

export default function LoginApp () {
    const [userData, setUserData] = useState<UserProps>({
        email: '',
        password: ''
    })  

    const handleUserData = (key: keyof UserProps, value: string) => {
        setUserData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }
   

    const handleSubmit = async () => {
        try {
            await signinService(userData)
        } catch (error) {
            
        }
    }


    return(
        <View className="flex-1 justify-center items-center gap-10">
            <Text className="font-bold text-2xl">CHATSOCKET</Text>
            <View className="flex-col justify-center items-center w-full gap-4">
                <Input
                    value={userData.email}
                    placeholder="Email" 
                    onChangeText={(text: string)=>handleUserData("email", text)}
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