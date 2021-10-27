import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ExchangeRates from './components/screens/ExchangeRates';
import About from "./components/screens/About";


import { SafeAreaView } from "react-navigation";


// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: HKMA_API
// });

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView
      style={styles.SAV}
      //forceInset={{top: "always", horizontal: "never", bottom: "always"}}
    >
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Rates" component={ExchangeRates} options={{tabBarLabel: "Rates"}}/>
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SAV: {
    height: "100%"
  }
})