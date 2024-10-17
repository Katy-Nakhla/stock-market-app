/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import {Image, View, Text} from 'react-native';

const Stack = createNativeStackNavigator();
interface LogoTitleProps {
  tintColor?: string; // or any other props you expect
}
function LogoTitle({tintColor}: LogoTitleProps): React.JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 50, height: 50}}
        source={require('../assets/applogo.jpg')}
      />
      <Text style={{color: tintColor}}>Nasdaq</Text>
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{headerShown: false}}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#191927',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Explore" component={ExploreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
