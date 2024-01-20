import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CountryContainer from "../Module/Country/Container/CountryContainer";

export const Stack = createNativeStackNavigator();

export const StackNavigator =()=>{
    return(
        <Stack.Navigator initialRouteName="country" screenOptions={{headerShown:false}}>
            <Stack.Screen name="country" component={CountryContainer}></Stack.Screen>
        </Stack.Navigator>
    )
}