import React, { useEffect } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
  useEffect(() => {
    console.log('Rendering Planner Screen');

    return () => console.log('Unmounting Planner Screen');
  });

  return (
    <View>
      <Text>PlannerScreen</Text>
      <Button title='Go to Home' onPress={() => navigation.push('Home')} />
    </View>
  );
};

export default PlannerScreen;
