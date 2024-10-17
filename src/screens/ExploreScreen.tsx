import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchInput from '../components/searchInput/SearchInput';
import {API_KEY, BASE_URL} from '@env';
import {trimExtraSpaces} from '../utils/TrimExtraSpaces';
import StockCard from '../components/stockCard/StockCard';

interface Stock {
  name: string;
  ticker: string;
}

const ExploreScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState<Stock[]>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchStocks = async (clearSearch: boolean = false) => {
    try {
      setLoading(true);
      let ENDPOINT_URL = `${BASE_URL}/tickers?active=true&limit=100&apiKey=${API_KEY}`;
      if (!clearSearch && trimExtraSpaces(searchValue).length > 0) {
        ENDPOINT_URL += `&search=${searchValue}`;
      }

      const response = await fetch(ENDPOINT_URL);
      const json = await response.json();

      const filterdData: Stock[] = json?.results?.map(function (
        stockItem: any,
      ) {
        return {name: stockItem.name, ticker: stockItem.ticker};
      });

      setData(filterdData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <View>
          <SearchInput
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            fetchStocks={fetchStocks}
          />
          <View>
            {data?.length > 0 ? (
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <StockCard name={item.name} ticker={item.ticker} />
                )}
                style={{marginBottom: 170}}
                numColumns={2}
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <View style={styles.noDataContainer}>
                <Text style={styles.noData}>No data found.</Text>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: '#000',
  },
  loaderContainer: {flex: 1, justifyContent: 'center'},
  container: {
    flex: 1,
    width: '100%',
  },
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '80%',
  },
  noData: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
