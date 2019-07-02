import React, {Component} from 'react';
import {TouchableOpacity, FlatList, Text, View, StyleSheet} from 'react-native';

import Header from '../../general/Header';
import CartProduct from './CartProduct';

import CommonStyles from '../../../styles/common';

class ScreenCart extends Component {
  isListEmpty = () => {
    return (this.props.screenProps.cart.length == 0);
  }
  
  onEmptyList = () => {
    if(!this.isListEmpty()) return null;
    return (
      <View style={styles.content_empty}>
        <Text>Ops!</Text>
        <Text>Your Cart is Empty.</Text>
      </View>
    );
  }

  onPurchase = () => {
    if(this.props.screenProps.onPurchase)
      this.props.screenProps.onPurchase();
  }

  render_button_buy = () => {
    if(this.isListEmpty()) return null;
    return (
      <TouchableOpacity style={styles.button_buy} onPress={this.onPurchase}>
        <Text style={styles.button_addtocart_text}>Proceed to Checkout</Text>
      </TouchableOpacity>
    );
  }
  
   
  
  render() {
    totalPrice = 0;
    counter = 0;
    shoppingCart = this.props.screenProps.cart
    for (const item of shoppingCart){
      totalPrice += item.quantity * item.price 
    }
    return (
      <View style={[styles.container, this.props.style]}>
        <Header style={styles.header}>Shopping Cart</Header>
        <View style={styles.content}>
          <FlatList
            data={this.props.screenProps.cart}
            extraData={this.props.screenProps.cartListUpdateFlag}
	    
	    renderItem={({item}) => {
	      counter=counter+1
              return (
		<View>
		<CartProduct
                name={item.key}
                image={item.image}
                price={item.price}
                quantity={item.quantity}/>
		
		


		</View>
		);		
            }}


        	
              
            contentContainerStyle={[{flexGrow: 1}, !this.isListEmpty() ? null : {justifyContent: 'center'}]}
            ListFooterComponent={this.onEmptyList}
          />
	
        <Text style={styles.total_price_view}>Total Price: ${totalPrice}</Text>
	
        </View>
        {this.render_button_buy()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 1, backgroundColor: '#d90315'},
  content: {flex: 11},
  content_empty: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button_buy: {
    ...CommonStyles.button, ...{
      flex: 0.5,
      alignItems: 'center',
      backgroundColor: 'red'
    }
  },
  button_addtocart_text: {
    ...CommonStyles.button_text, ...{
      color: 'white'
    }
  },
  total_price_view: {
      ...CommonStyles.button_text, ...{
      textAlign: 'center',
      backgroundColor: 'green'
    }
  },
  button_remove: {
    ...CommonStyles.button, ...{
      flex: 0.5,
      alignItems: 'center',
      backgroundColor: 'red',
      color: 'white'
    }
  }
});

export default ScreenCart;
