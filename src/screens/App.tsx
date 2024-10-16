/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import SplashScreen from './SplashScreen';

function App(): React.JSX.Element {
  const [visible, setVisible] = useState(true);

  return (
    <View style={{flex: 1,justifyContent:'center', backgroundColor:'white'}}>
      <Text style={styles.textStyle}>Hello Katy!</Text>
      {visible && (
        <SplashScreen
          onAnimationEnd={() => {
            setVisible(false);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle:{
    fontSize:20,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    color:'#000'
  }
});

export default App;
