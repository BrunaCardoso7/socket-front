import React, { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode
}

function Button ({children, ...rest}: ButtonProps) {
    return (
        <TouchableOpacity className="bg-black px-16 py-3 rounded-full" {...rest}>
            {children}
        </TouchableOpacity>
    )

}

type TextProps = {
    children: ReactNode
}

function ButtonText ({children}: TextProps) {
    return (
        <Text className="text-white text-xl font-semibold">
            {children}
        </Text>
    )
}

Button.Text = ButtonText

export default Button