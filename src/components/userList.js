
// Component for user list 

import React from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import UserItem from "./userItem";
import data from '../../Test.json';
import { BGCOLOR } from "../constants/colors";

const UserList = ({ route, navigation }) => {
    return (
        <View style={styles.list}>
            {
                data.members.map(member => <UserItem key={member.id} member={member} />)
            }
        </View>
    )
};
export default UserList;

const styles = StyleSheet.create({
    list: {
        marginVertical: 16,
        alignItems: 'center',
        backgroundColor: BGCOLOR
    }
})