import {Image, Pressable, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

interface InputProps {
  searchValue: string;
  setSearchValue: (newValue: string) => void;
  fetchStocks: () => {};
}
const SearchInput = ({
  searchValue,
  setSearchValue,
  fetchStocks,
}: InputProps) => {
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={styles.inputField}
        placeholder="Search for stocks"
        onChangeText={newValue => setSearchValue(newValue)}
        defaultValue={searchValue.trimStart()}
        value={searchValue.trimStart()}
        placeholderTextColor="gray"
        onEndEditing={() => {
          fetchStocks();
        }}
      />
      {searchValue.trimStart().length > 0 && (
        <Pressable
          style={styles.clearIconContainer}
          onPress={() => setSearchValue('')}>
          <Image
            style={styles.clearIcon}
            source={require('../../assets/clearIcon.jpg')}></Image>
        </Pressable>
      )}
    </View>
  );
};
export default SearchInput;

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: '#dfdfdf',
    // backgroundColor: '#23263A',
    borderRadius: 20,
    height: 50,
    paddingLeft: 20,
    color: 'gray',
  },
  clearIconContainer: {position: 'absolute', top: 20, right: 20},
  clearIcon: {
    width: 30,
    height: 30,
  },
});
