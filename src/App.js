import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from "./navigations";
import { StatusBar } from "react-native";
import { SKYBLUE } from "./constants/colors";

const App = ({ route, navigation }) => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={SKYBLUE} />
      <StackNavigator />
    </NavigationContainer>
  )
};
export default App;
