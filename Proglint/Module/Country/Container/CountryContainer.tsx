import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { countryContainerStyle } from "./CountryContainerStyl"
import HeaderComponent from "../../../Component/Header/HeaderComponent"
import { useEffect, useState } from "react"
import axios from "axios"
import SearchInput, { createFilter } from 'react-native-search-filter';
import { useSelector } from "react-redux"


const CountryContainer = () => {

    const [filterDatas, getFilterData] = useState()
    const storeProps: any = useSelector((store: any) => store)
    useEffect(() => {

        let getData: any;
        getData =  axios.get('https://restcountries.com/v3.1/all').then((res: any) => {
            getData = res.data;
            getData.map((datas: any) => {
                getFilterData(datas);
               
            })
         setTimeout(() => {
            console.log('datas',filterDatas)
         }, 1000);
        })


    })
    const searchUpdated = (term: any) => {

    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: storeProps.themeReducer.isDark == 'dark' ? '#000000' : '#919191'
        }}>
            <View>
                <HeaderComponent></HeaderComponent>
            </View>
            <View>
                <SearchInput
                    onChangeText={(term) => { searchUpdated(term) }}
                    style={countryContainerStyle.searchInput}
                    placeholder="Type a message to search"
                />
                <ScrollView>
                    {/* {filteredEmails.map((email: any) => {
                        return (
                            <TouchableOpacity key={email.id} style={countryContainerStyle.emailItem}>
                                <View>
                                    <Text>{email.user.name}</Text>
                                    <Text style={countryContainerStyle.emailSubject}>{email.subject}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })} */}
                </ScrollView>
            </View>
        </View>
    )


}

export default CountryContainer