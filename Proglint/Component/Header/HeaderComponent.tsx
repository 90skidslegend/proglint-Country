import { Image, Text, TouchableOpacity, View } from "react-native";
import { HeaderComponentStyle } from "./HeaderComponentStyle";


const HeaderComponent = ()=>{

    return(
        <TouchableOpacity style={HeaderComponentStyle.view}>
            <Image style={HeaderComponentStyle.img} source={require('../../assets/icon.png')}></Image>
        </TouchableOpacity>
    )
}


export default HeaderComponent;