import { TextInput, TextInputProps } from "react-native";

type InputProps = {
    placeholder: string
}

export default function Input ({...rest}: TextInputProps) {
    return<TextInput
        {...rest}
        multiline
        textAlignVertical="top"
        className="bg-slate-300 h-fit w-3/4 px-8 py-3 rounded-full"
    />
}