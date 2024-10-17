import {StyleSheet, Text, Image, Button, TextInput, View} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {handleUserSignup} from '../store/userAction';
import {UserPayload} from '../store/constants';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

const SignupScreen = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<UserPayload>();
  const dispatch = useDispatch();

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const onSubmit = (data: UserPayload) => {
    dispatch(handleUserSignup(data));
    navigation.navigate('Explore');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formStyle}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/loginImage.png')}></Image>
        <Text style={styles.label}>Username</Text>
        <Controller
          name="username"
          control={control}
          rules={{required: true}}
          render={({field: {onChange, value}}) => (
            <TextInput
              onChangeText={text => onChange(text)}
              value={value}
              placeholder="username"
              style={styles.input}
            />
          )}
        />
        {errors.username && (
          <Text style={styles.errorValidation}>This field is required</Text>
        )}
        <Text style={styles.label}>Phone number</Text>
        <Controller
          name="phone"
          control={control}
          rules={{required: true}}
          render={({field: {onChange, value}}) => (
            <TextInput
              onChangeText={text => onChange(text)}
              value={value}
              placeholder="phone"
              style={styles.input}
            />
          )}
        />
        {errors.username && (
          <Text style={styles.errorValidation}>This field is required</Text>
        )}
        <Button onPress={handleSubmit(onSubmit)} title="Start" />
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  imgStyle: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: -80,
    left: '45%',
  },
  formStyle: {
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
  errorValidation: {
    color: 'red',
    marginBottom: 3,
  },
});
