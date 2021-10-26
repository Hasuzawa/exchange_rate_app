import React from "react";
import { View, SafeAreaView, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView as SAV} from "react-navigation";

import axios from "axios";



const ExchangeRates = () => {
    // const { loading, error, data} = useQuery(getRates);
    // if (data) console.log(data);

    axios.get("https://api.hkma.gov.hk/public/market-data-and-statistics/monthly-statistical-bulletin/er-ir/er-eeri-periodaverage?offset=0")
        .then(response => console.log(response))


    return(
        <SAV>
            <Text>exchange rates</Text>
        </SAV>
    );
}


const styles = StyleSheet.create({

});


export default ExchangeRates;