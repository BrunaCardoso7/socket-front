import { View, Text } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import ButtoIcon from "../button"

export const HeaderChat = () => {
    return (
        <View className=" w-screen fixed top-0 px-4 py-5 mt-6 border-solid flex-row justify-between items-center border-slate-800 border-b-2">
            <Text className=" text-xl font-bold">
                Bruna Fernandes
            </Text>
            <ButtoIcon>
                <AntDesign name="message1" size={24} color="white" />
            </ButtoIcon>
        </View>
    )
}