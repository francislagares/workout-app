import React, { useEffect } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import WorkoutItem from '../components/WorkoutItem/WorkoutItem';
import data from '../data.json';
import { IWorkout } from '../types/data';

/* const PressableItem = ({ item }: { item: IWorkout }) => {
  return (
    <Pressable onPress={() => alert(`I am pressed ${item.name}`)}>
      <WorkoutItem item={item} />
    </Pressable>
  );
}; */

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  useEffect(() => {
    console.log('Rendering Home Screen');

    return () => console.log('Unmounting Home Screen');
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Workouts</Text>
      <FlatList
        data={data as IWorkout[]}
        keyExtractor={item => item.slug}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('WorkoutDetail', { slug: item.slug })
              }
            >
              <WorkoutItem item={item} />
            </Pressable>
          );
        }}
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
    fontFamily: 'montserrat-bold',
  },
});
