import React, {Component} from 'react';
import {Image, ImageBackground, View, StyleSheet, Text} from 'react-native';
import ImageContent from '../../library/ImageContent';


class ScreenCheckout extends Component {
  render() {
    return (
      <View style={styles.container}>
        
            <Text style={styles.mainText1}>
              Welcome to
            </Text>
            <Text style={styles.mainText2}>
              Eat Quick!
            </Text>
            <Text style={styles.subText}>
              Restaurant and Food Finder.
            </Text>
            <Text style={styles.description}>
              Searches the web for restaurants and shows you the best food around.
            </Text>
          
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {flex: 1},
  content: {flex: 1, height: null, width: null},
  mainText1: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 30,
    fontWeight: 'bold',
  },
  mainText2: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  subText: {
    color: 'white',
    fontSize: 13,
    paddingBottom: 5
  },
  description: {
    color: 'white',
    fontSize: 11
  }
});

export default ScreenCheckout;
