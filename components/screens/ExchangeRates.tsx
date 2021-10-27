import React, { useState, useEffect} from "react";
import { View, SafeAreaView, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView as SAV} from "react-navigation";

import axios from "axios";

const HKMA_API = "";

// this also defines the display order of exchange rates, total 14
const currencies: string[] = ["usd", "eur", "gbp", "cny", "jpy", "cad", "aud",
    "sgd", "krw", "twd", "chf", "myr", "php", "inr"];
// you also need the end of month for graphing

interface exchange_rate {
    currency: string            // the name, e.g. USD
    rate: number[]
    time: string[]
}

interface exchange_rate_data {

}

const ExchangeRates = () => {
    // const { loading, error, data} = useQuery(getRates);
    // if (data) console.log(data);
    const [ rates, setRates ] = useState([]);

    useEffect(() => {

    }, []);

    axios.get("https://api.hkma.gov.hk/public/market-data-and-statistics/monthly-statistical-bulletin/er-ir/er-eeri-periodaverage?offset=0")
        .then(response => {console.log(response); console.log(response.data.result.records)})
        //the records is an array of object
        // object { "aud": , "bef": }

    return(
        <>  {/* use FlatList here later */}
            

            <View>
            <Text>exchange rates</Text>
            </View>
        </>
    );
}


const styles = StyleSheet.create({

});


export default ExchangeRates;