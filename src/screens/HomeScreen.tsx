import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from './SplashScreen';
import ExploreScreen from './ExploreScreen';

const HomeScreen = () => {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <SplashScreen
      onAnimationEnd={() => {
        setVisible(false);
      }}
    />
  ) : (
   <ExploreScreen/>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
  },
});
