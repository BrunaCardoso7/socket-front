import { View, Text } from "react-native"

type bubbleProps = {
    message: string
}

export const BubbleDest = ({message}:bubbleProps) => {
    return (
        <View className="w-screen p-6">
            <View className="bg-slate-700 p-4 w-72 rounded-xl">
                <Text className="text-slate-50">
                    {message}
                </Text>
            </View>
        </View>
    )
}
export const BubbleRem = ({message}:bubbleProps) => {
    return (
        <View className="w-screen p-6 justify-end items-end">
        <View className="bg-slate-300 p-4 w-72 rounded-xl">
            <Text className="">
                {message}
            </Text>
        </View>
    </View>
    )
}