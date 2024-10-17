import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Profile = () => {
  const userData = useSelector(state => state.userData);

  return (
    <View style={styles.container}>
      <View style={styles.cardStyle}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/loginImage.png')}></Image>
        <Text style={styles.label}>Username : {userData.username}</Text>

        <Text style={styles.label}>Phone number : {userData.phone}</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginTop: 90,
    backgroundColor: '#f5f5f5',
  },
  imgStyle: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: -80,
    left: '40%',
  },
  cardStyle: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 60,
    width: '90%',
  },
  label: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    color: '#000',
  },
});
