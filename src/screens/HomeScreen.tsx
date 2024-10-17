import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from './SplashScreen';

const HomeScreen = () => {
  const [visible, setVisible] = useState(true);

  return visible ? (
    <SplashScreen
      onAnimationEnd={() => {
        setVisible(false);
      }}
    />
  ) : (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <Text style={styles.textStyle}>Hello Katy!</Text>
    </View>
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
