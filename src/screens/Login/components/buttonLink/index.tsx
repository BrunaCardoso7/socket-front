import { useNavigation } from '@react-navigation/native';
import { ReactNode } from 'react';
import { TouchableOpacity, Text } from 'react-native';

type LinkingProps = {
    screenName: string
    children: ReactNode
}

export default function ButtonLink ({screenName, children}: LinkingProps) {
    const navigation = useNavigation()
    const hadleNavigation = () => {
        navigation.navigate(screenName)
    }
    return(
        <TouchableOpacity onPress={hadleNavigation}>
            <Text className='text-base font-semibold mt-4'>
                {children}
            </Text>
        </TouchableOpacity>
    )
}