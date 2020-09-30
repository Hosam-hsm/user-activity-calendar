
// Card to show single user in the list

import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SCREENWIDTH } from "../constants/layout";
import { CARDCOLOR } from "../constants/colors";
import Icon from 'react-native-vector-icons/Ionicons'

const UserItem = ({ member }) => {
    const { id, real_name } = member
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Details', { id })}
            style={styles.card}>
            <View>
                <Text style={styles.id}>id: {id}</Text>
                <Text style={styles.name}>{real_name}</Text>
            </View>
            <Icon name="ios-chevron-forward" size={30} color="#000" />
        </TouchableOpacity>
    )
};
export default UserItem;

const styles = StyleSheet.create({
    card: {
        width: SCREENWIDTH - 50,
        padding: 8,
        margin: 16,
        marginVertical: 10,
        borderRadius: 8,
        backgroundColor: CARDCOLOR,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    id: {
        color: '#a3a3a3'
    },
    name: {
        fontSize: 14,
        color: '#000',
        textTransform: 'capitalize'
    }
})