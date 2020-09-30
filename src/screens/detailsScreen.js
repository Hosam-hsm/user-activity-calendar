
// Shows the detailed information of each user

import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import BackButton from "../components/backButton";
import Calendar from "../components/calendar";
import { BGCOLOR } from "../constants/colors";
import data from '../../Test.json'

const DetailsScreen = ({ route }) => {
    const { id } = route.params
    const [selectedUser, setSelectedUser] = useState()

    useEffect(() => {
        data.members.map(member => member.id === id ? setSelectedUser(member) : null)
    }, [])


    return (
        <View style={styles.container}>
            <BackButton />
            <View style={styles.details}>
                <Text>id : {id}</Text>
                <Text style={styles.username}>{selectedUser?.real_name}</Text>
            </View>
            <Text style={styles.timezone}>Time Zone: {selectedUser?.tz}</Text>
            <View style={styles.calendar}>
                <Calendar selectedUser={selectedUser} />
            </View>
        </View>
    )
};
export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BGCOLOR,
    },
    details: {
        marginTop: 16,
        marginHorizontal: 16,
        alignSelf: 'flex-end'
    },
    username: {
        fontWeight: '700',
        maxWidth: 150,
    },
    timezone: {
        alignSelf: 'center',
        fontWeight: '700',
        marginTop: 8
    },
    calendar: {
        flex: 1,
        marginTop: 16
    }
})