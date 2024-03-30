import React, { useState } from 'react';
import { StyleSheet, View, Button, StatusBar, Text } from 'react-native';
import {PlusCircleOutlined} from '@ant-design/icons'
export default function DayPlannerScreen() {
    const [date, setDate] = useState(new Date());

    const incrementDate = (increment) => {
        setDate(new Date(date.setDate(date.getDate() + (increment ? 1 : -1))));
    };

    return (
            <View style={styles.dateRow}>
                <Button
                    title="Left"
                    color="#000000"
                    onPress={() => incrementDate(false)}
                />
                
                {/* Date text */}
                <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
                
                {/* Right button */}
                <Button
                    title="Right"
                    color="#000000"
                    onPress={() => incrementDate(true)}
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


