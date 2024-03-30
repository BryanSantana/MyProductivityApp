import React, { useState } from 'react';
import { StyleSheet, View, Button, StatusBar, Text, TouchableOpacity } from 'react-native';
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

    return (
            <View style={styles.dateRow}>
                <IconButton
                     onPress={() => incrementDate(false)}
                     iconName="arrowleft"
                />
                
                {/* Date text */}
                <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
                
                {/* Right button */}
                <IconButton
                    onPress={() => incrementDate(true)}
                    iconName="arrowright"
                />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center', // Centers the content vertically
        alignItems: 'center', // Centers the content horizontally
    },
    dateRow: {
        flexDirection: 'row', // Arranges children in a horizontal row
        alignItems: 'center', // Aligns children vertically in the center
        justifyContent: 'center', // Distributes extra space evenly
    },
});


