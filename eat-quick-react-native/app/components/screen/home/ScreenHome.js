import React, {Component} from 'react';
import {ImageBackground, Text, View, StyleSheet} from 'react-native';

import ImageContent from '../../library/ImageContent';

class ScreenHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.content} source={require('../../../images/sample.jpg')}>
          <ImageContent>
            <Text style={styles.mainText1}>
              Welcome to
            </Text>
            <Text style={styles.mainText2}>
              Eat Quick!
            </Text>
       
            <Text style={styles.mainText3}>
              Swipe to See Our Restaurants
            </Text>
            <Text style={styles.subText}>
              Restaurant and Food Finder.
            </Text>
            <Text style={styles.description}>
              Searches the web for restaurants and shows you the best food around.
             
            </Text>
          </ImageContent>
        </ImageBackground>
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
  mainText3: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 20,
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

export default ScreenHome;
