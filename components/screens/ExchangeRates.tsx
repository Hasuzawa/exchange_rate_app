import React, { useState, useEffect} from "react";
import { View, SafeAreaView, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView as SAV} from "react-navigation";

import { LineChart } from "react-native-chart-kit";

import axios from "axios";

const HKMA_API = "https://api.hkma.gov.hk/public/market-data-and-statistics/monthly-statistical-bulletin/er-ir/er-eeri-periodaverage";

// this also defines the display order of exchange rates, total 14
const currencies = ["usd", "eur", "gbp", "cny", "jpy", "cad", "aud",
    "sgd", "krw", "twd", "chf", "myr", "php", "inr"] as const;      // read-only type-value
type Currency = typeof currencies[number];      // "usd" | "eur" | ... | "inr"



// you also need the end of month for graphing

interface ExchangeRate {
    name: string
    rate: number[]
    //time: string[]
}

interface ExchangeRateData extends Record<Currency, ExchangeRate>{
}


const ExchangeRates = () => {
    // const { loading, error, data} = useQuery(getRates);
    // if (data) console.log(data);
    const [ data, setData ] = useState<ExchangeRateData | undefined>(undefined);

    // useEffect(() => {
    //     axios.post("https://api.hkma.gov.hk/public/market-data-and-statistics/monthly-statistical-bulletin/er-ir/er-eeri-periodaverage",
    //     {
    //         offset: 100
    //     }).then(response => {console.log(response.data.result.records)})
    //     .catch(() => console.log("error"));
    // }, []);
    const today: Date = new Date();
    console.log(today.toISOString());
    const API_from = "2021-01"
    //const API_to = today.toISOString()
    const API_to = "2021-09"
    useEffect(() => {
        axios.get(HKMA_API + `?from=${API_from}&to=${API_to}`)
            .then(response => {
                for (currency of currencies){
                    
                }
            })
            .catch(() => console.log("error"));


    }, []);
    // axios.get(`https://api.hkma.gov.hk/public/market-data-and-statistics/monthly-statistical-bulletin/er-ir/er-eeri-periodaverage?
    //     from=${API_from}&to=${API_to}`)
    //     .then(response => {console.log(response.data.result.records)});


    return(
        <>

            <View>
            <Text>exchange rates</Text>
            </View>

            {/* test the effect of parameters of the chart below */}
            
            <View>
                {/* <Text>Bezier Line Chart</Text> */}
            <LineChart
                data={{
                    labels: ["Jan"],
                    datasets: [{
                        data: [1, 2, 3]
                    }]
                }}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={{
                    //backgroundColor: "#000000",
                    backgroundGradientFrom: "#000000",
                    backgroundGradientTo: "#000000",
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
            />
            <LineChart
                data={{
                labels: ["January", "February", "March", "April", "May", "June", "July", "Aug", "Sep"],
                datasets: [
                    {
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
            </View>
            </>
    );
}


const styles = StyleSheet.create({

});


export default ExchangeRates;