import React, { useEffect } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  useEffect(() => {
    console.log('Rendering Home Screen');

    return () => console.log('Unmounting Home Screen');
  });

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title='Go to Planner'
        onPress={() => navigation.push('Planner')}
      />
    </View>
  );
};

export default HomeScreen;
