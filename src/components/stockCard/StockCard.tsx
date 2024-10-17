import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

type CardProps = {name: string; ticker: string};

const StockCard: React.FC<CardProps> = ({name, ticker}: CardProps) => {

    return (
    <View style={styles.cardContainer}>
      <View style={styles.tickerContainer}>
        <LinearGradient
          colors={['#deebfc', '#b9e4f0', '#4a6b75']}
          style={styles.linearGradient}>
          <Text style={styles.tickerText}>{ticker}</Text>
        </LinearGradient>
      </View>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
};

export default StockCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '45%',
    height: 150,
    backgroundColor: '#23263A',
    borderRadius: 30,
    margin: 10,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  nameText: {
    textAlign: 'center',
    fontSize: 11,
    paddingRight: 7,
    paddingLeft: 7,
  },
  tickerContainer: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 2,
    borderRadius: 5,
    alignSelf: 'center',
    textAlign: 'center',
    // backgroundColor:'#FFDD57',
  },
  linearGradient: {
    borderRadius: 5,
    padding: 4,
    paddingBottom: 0,
    textAlign: 'center',
  },
  tickerText: {
    textAlign: 'center',
    fontSize: 11,
    marginBottom: 10,
    color: '#23263A',
  },
});
