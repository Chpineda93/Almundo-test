import React from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';

export default function Input(props) {
    return (
        <TextInput
        style={styles.Input}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    Input: {
        backgroundColor: "white",
        paddingLeft: 5,
        borderBottomColor: "#b3b3b3",
        borderBottomWidth: 1,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 1
    }
});