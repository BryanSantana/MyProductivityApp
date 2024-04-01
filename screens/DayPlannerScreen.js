import React, { useState } from 'react';
import { StyleSheet, View, Button, StatusBar, Text, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function DayPlannerScreen() {
    const [date, setDate] = useState(new Date());
    
    const IconButton = ({ onPress, iconName }) => (
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <AntDesign name={iconName} size={30} color="#000" />
        </TouchableOpacity>
    );

    const incrementDate = (increment) => {
        setDate(new Date(date.setDate(date.getDate() + (increment ? 1 : -1))));
    };

 // Generates hours in 12-hour format with AM/PM
 const hours = Array.from({ length: 24 }, (_, index) => {
    const isAM = index < 12;
    let hour = index % 12;
    hour = hour === 0 ? 12 : hour; // Convert 0 to 12 for both AM and PM
    const suffix = isAM ? 'AM' : 'PM';
    return `${hour} ${suffix}`;
});

    return (
        <View style={styles.container}>
            <View style={styles.dateRow}>
                <IconButton onPress={() => incrementDate(false)} iconName="arrowleft" />
                <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
                <IconButton onPress={() => incrementDate(true)} iconName="arrowright" />
            </View>
            <ScrollView style={styles.hoursList}>
                {hours.map((hour, index) => (
                    <View key={index} style={styles.hourRow}>
                        <Text style={styles.hourText}>{hour}</Text>
                    </View>
                ))}
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10, // Added padding for better spacing
    },
    hoursList: {
     // Takes the remaining space
    },
    hourRow: {
        padding : 10, // Adds padding around each hour for better spacing
        borderBottomWidth: 3, // Adds a line between hours
        borderBottomColor: '#e0e0e0', // Light grey color for the line
    },
    hourText: {
        fontSize: 16, // Adjust as needed
    },
});


