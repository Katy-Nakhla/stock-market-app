import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../components/searchInput/SearchInput';

const ExploreScreen = () => {
  const [searchValue, setSearchValue] = useState('');

  const fetchStocks = async () => {};

  return (
    <View>
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        fetchStocks={fetchStocks}
      />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: '#000',
  },
});
