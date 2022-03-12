import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { WelcomePage } from "../pages/WelcomePage";

const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WelcomePage" component={WelcomePage}options={{ headerShown: false}}/>
        </Stack.Navigator>
    )
}