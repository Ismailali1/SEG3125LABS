import React, {Component} from 'react';
import {Image, ImageBackground, View, StyleSheet, Text, Button} from 'react-native';
import ImageContent from '../../library/ImageContent';
import Header from '../../general/Header';
import { List, ListItem } from 'react-native-elements';
import t from 'tcomb-form-native';
import Toast from 'react-native-easy-toast'


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
      error: 'Without a Name you cannot place Order'
    },
    CreditCard: {
      error: 'Without a Credit Card you cannot place Order'
    },
    Address: {
      error: 'Without a Address you cannot place Order'
    },
    SecurityNumber: {
      error: 'Without a Security Number you cannot place Order'
    },
  
  
  },
  stylesheet: formStyles,
};


class ScreenCheckout extends Component {
  
  constructor(props) {
    super(props);
  }
  
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    if (value) {
      this.toast.show('Order was Successful!', 2000);
      
    }
  }
  
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Header style={styles.header}>CheckOut</Header>
        
            <Form style={styles.forms}
          ref={c => this._form = c}
          type={credit} 
          options={options}
        />
        <Button
          title="Submit your Order"
          onPress={this.handleSubmit}
        />
         
         <Toast ref={ref => this.toast = ref} /> 
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  header: {flex: 0.15, backgroundColor: '#d90315'},
  mainText1: {
    color: 'black',
    fontFamily: 'serif',
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1
  },
  forms: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  }

  
});

export default ScreenCheckout;
