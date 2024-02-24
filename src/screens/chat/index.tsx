import { View, Text } from "react-native"
import { HeaderChat } from "./components/header"
import { InputMessadge } from "./components/inputMessage"
import { Ionicons } from "@expo/vector-icons"
import ButtoIcon from "./components/button"


export const Chat = () => {

    return (
        <View className="flex-1 justify-between items-center">
            <HeaderChat />
            <View className="flex-row items-center justify-between">
                <InputMessadge />
                <ButtoIcon>
                    <Ionicons name="send" size={24} color="white" />
               </ButtoIcon>
            </View>
        </View>
    )
}