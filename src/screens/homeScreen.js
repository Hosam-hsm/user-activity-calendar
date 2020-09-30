
// Shows the list of users

import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from "react-native";
import UserList from "../components/userList";
import { BGCOLOR } from "../constants/colors";

const HomeScreen = ({ route, navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Users</Text>
            <ScrollView>
                <UserList />
            </ScrollView>
        </SafeAreaView>
    )
};
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BGCOLOR,
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 50
    }
})