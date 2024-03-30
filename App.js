import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DayPlannerScreen from './screens/DayPlannerScreen';
import CalorieTrackerScreen from './screens/CalorieTrackerScreen';
import WorkoutTrackerScreen from './screens/WorkoutTrackerScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calorie Tracker" component={CalorieTrackerScreen} />
        <Tab.Screen name="Day Planner" component={DayPlannerScreen} />
        <Tab.Screen name="Workout Tracker" component={WorkoutTrackerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

