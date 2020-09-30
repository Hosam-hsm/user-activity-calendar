import React from "react";
import {
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

const BackButton = ({ }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.dispatch(CommonActions.goBack())}
            style={styles.container}>
            <Icon name="ios-chevron-back" size={30} color="#000" />
        </TouchableOpacity>
    )
};
export default BackButton;

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        borderRadius: 20,
        padding: 5,
        backgroundColor: '#fff',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 16,
        left: 16,
        zIndex: 10
    }
})