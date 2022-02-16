import React from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';

const WorkoutDetailScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Detail!</Text>
    </View>
  );
};

export default WorkoutDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    fontFamily: 'montserrat-bold',
  },
});
