import React from "react";
import { View, SafeAreaView, Text, FlatList, Button } from "react-native";
import * as Linking from "expo-linking";

const About = () => {

    const toWebsite = (url: string) => {
        Linking.openURL(url);
    }

    return(
        <SafeAreaView>
            <Text>About this app</Text>
            <Text>This is a portfolio and personal project. The creation of this app is for demonstrative purpose.</Text>

            <Text>Author</Text>
            <Text>This app is created by Hasuzawa Yuichi</Text>
            <Text>The author can be reached at</Text>
            <Button title="to author page" onPress={() => toWebsite("https://github.com/Hasuzawa")} />

            <Text>API</Text>
            <Text>Data is taken from Hong Kong Monetary Authority</Text>
            <Button title="open website" onPress={() => toWebsite("https://apidocs.hkma.gov.hk/")} />

            
        </SafeAreaView>
    );
}


export default About;