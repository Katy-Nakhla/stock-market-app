/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ExploreScreen from './ExploreScreen';
import Profile from './Profile';
import {Image, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import { store } from '../store/store';

const Drawer = createDrawerNavigator();

interface LogoTitleProps {
  tintColor?: string;
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
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerItemStyle: {display: 'none'},
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Explore"
            component={ExploreScreen}
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
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
