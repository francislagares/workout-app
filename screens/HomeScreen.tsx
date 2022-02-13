import React, { useEffect } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import WorkoutItem from '../components/Workout/WorkoutItem';
import data from '../data.json';
import { IWorkout } from 'types/data';

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  useEffect(() => {
    console.log('Rendering Home Screen');

    return () => console.log('Unmounting Home Screen');
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>I am home screen</Text>
      <FlatList
        data={data as IWorkout[]}
        keyExtractor={item => item.slug}
        renderItem={WorkoutItem}
      />
      <Button
        title='Go to Planner'
        onPress={() => navigation.push('Planner')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
