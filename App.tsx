import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import LoginApp from "./src/screens/Login";
import Register from "./src/screens/register";

const Stack = createStackNavigator()

export default function App() {
  return (
   <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='login' component={ LoginApp } />
        <Stack.Screen name='register' component={ Register } />
      </Stack.Navigator>
    </NavigationContainer>
   </>
  );
}
