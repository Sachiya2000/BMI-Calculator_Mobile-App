import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextField = () => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const date = new Date();
        const hour = date.getHours();

        if (hour >= 5 && hour < 12) {
            setGreeting('Good morning');
        } else if (hour >= 12 && hour < 15) {
            setGreeting('Good afternoon');
        } else if (hour >= 15 && hour < 18) {
            setGreeting('Good evening');
        } else {
            setGreeting('Good night');
        }
    }, []); // Empty dependency array to run the effect only once on component mount

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{greeting} My Dear Friends</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'lightblue',
    },
});

export default TextField;
