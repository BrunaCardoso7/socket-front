import React, { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode
}

function ButtoIcon ({children, ...rest}: ButtonProps) {
    return (
        <TouchableOpacity {...rest}  className="bg-black justify-center items-center p-4 rounded-full">
            {children}
        </TouchableOpacity>
    )

}

export default ButtoIcon