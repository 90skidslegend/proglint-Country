import { NavigationContainer } from "@react-navigation/native"
import { StackNavigator } from "./Navigation/Navigator"
import { useEffect } from "react"
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Store";
import { switchTheme } from "./Module/Country/Redux/Reducer/ThemeReducer";

const App =()=>{
  const colorScheme = useColorScheme();


  useEffect(()=>{
    const newColorScheme :any= colorScheme === 'dark' ? 'dark' : 'light';
     store.dispatch(switchTheme(newColorScheme))
  })
  return(
    <Provider store={store}>
   <NavigationContainer>
    <StackNavigator></StackNavigator>
   </NavigationContainer>
   </Provider>
  )
}
export default App