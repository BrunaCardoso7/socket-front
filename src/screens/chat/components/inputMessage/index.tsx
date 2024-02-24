import { TextInput, TextInputProps, View } from "react-native"
import ButtoIcon from "../button"
import { Ionicons } from "@expo/vector-icons"

export const InputMessadge = ({...rest}: TextInputProps) => {
    return (
        <TextInput 
        multiline
        textAlignVertical="top"
        className="bg-slate-300 h-fit w-3/4 px-8 py-3 mx-4 rounded-full fixed bottom-0"
        />
    )
}