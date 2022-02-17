import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import data from '../data.json';
import { containsKey, getData, storeData } from '../storage';

const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        const hasWorkouts = await containsKey('workout-data');
        if (!hasWorkouts) {
          await storeData('workout-data', data);
        }

        await Font.loadAsync({
          montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
          'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        const workouts = await getData('workout-data');
        console.log(workouts);
        setIsLoadingComplete(true);
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
