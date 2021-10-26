import React from "react";
import { View, SafeAreaView, Text, FlatList, StyleSheet } from "react-native";
import { useQuery, gql } from "@apollo/client";

const getRates = gql`
    query getRates {
        rates {
            usd
        }
    }
`


const ExchangeRates = () => {
    const { loading, error, data} = useQuery(getRates);
    if (data) console.log(data);
    return(
        <SafeAreaView>
            <Text>exchange rates</Text>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    
});


export default ExchangeRates;