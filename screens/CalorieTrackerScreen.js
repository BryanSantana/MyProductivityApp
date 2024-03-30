import { StyleSheet, View, Text, StatusBar} from "react-native";

export default function CalorieTrackerScreen() {
    return (
      <View style={styles.container}>
        <Text>Calories</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  