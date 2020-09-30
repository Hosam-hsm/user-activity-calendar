import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import UserList from "../screens/homeScreen";
import UserDetails from "../screens/detailsScreen";

const Stack = createStackNavigator();

const StackNavigator = ({ route, navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={UserList} />
            <Stack.Screen name="Details" component={UserDetails} />
        </Stack.Navigator>
    )
};
export default StackNavigator;
