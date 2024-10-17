import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from './SplashScreen';
import SignupScreen from './SignupScreen';
import {useSelector} from 'react-redux';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HomeScreen = () => {
  const [visible, setVisible] = useState(true);
  const userData = useSelector(state => state.userData);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    if (!visible && userData.username) {
      navigation.navigate('Explore');
    }
  }, [visible]);

  return visible ? (
    <SplashScreen
      onAnimationEnd={() => {
        setVisible(false);
      }}
    />
  ) : (
    <SignupScreen />
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
