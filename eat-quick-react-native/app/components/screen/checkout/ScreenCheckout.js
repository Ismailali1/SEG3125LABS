import React, {Component} from 'react';
import {Image, ImageBackground, View, StyleSheet, Text, Button} from 'react-native';
import ImageContent from '../../library/ImageContent';
import Header from '../../general/Header';
import { List, ListItem } from 'react-native-elements';
import t from 'tcomb-form-native';


const Form = t.form.Form;

const credit = t.struct({
  Name: t.String,
  Address: t.String,
  CreditCard: t.Number,
  SecurityNumber: t.Number,
 
});


const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'black',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    Name: {
      error: 'Without a Name you cannot place Order?'
    },
    CreditCard: {
      error: 'Without a Credit Card you cannot place Order?'
    },
    Address: {
      error: 'Without a Address you cannot place Order?'
    },
    SecurityNumber: {
      error: 'Without a Security Number you cannot place Order?'
    },
  
  
  },
  stylesheet: formStyles,
};


class ScreenCheckout extends Component {

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}>CheckOut</Header>
       
            <Form 
          ref={c => this._form = c}
          type={credit} 
          options={options}
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
         
          
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  header: {flex: 0.12, backgroundColor: '#d90315'},
  mainText1: {
    color: 'black',
    fontFamily: 'serif',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },

  
});

export default ScreenCheckout;
