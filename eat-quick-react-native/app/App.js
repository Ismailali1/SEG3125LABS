import React, {Component} from 'react';
import {View} from 'react-native';
import {NavigationActions, createStackNavigator} from 'react-navigation';
import Toast from 'react-native-easy-toast';

import SplashScreen from 'react-native-splash-screen';

import {createCustomBottomTabNavigator} from './components/navigator/BottomTabNavigator';

import ScreenHome from './components/screen/home/ScreenHome';
import ScreenListMenu from './components/screen/menu/ScreenListMenu';
import ScreenCart from './components/screen/cart/ScreenCart';
import ScreenCheckout from './components/screen/checkout/ScreenCheckout';
import ScreenRestaurants from './components/screen/restaurants/ScreenRestaurants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      cartListUpdateFlag: false
    }
  }

  appManager = () => {
    let onAddToCart = (product, amount) => {
      let cart = Object.assign([], this.state.cart);
      cart.push({
        key: product.name,
        image: product.image,
        price: product.price,
        quantity: amount
      });
      console.log("cart=" + JSON.stringify(cart));
      this.setState({
        cart: cart,
        cartListUpdateFlag: !this.state.cartListUpdateFlag
      }, () => {
        this.toast.show('Added Item to Cart!', 2000);
      });
    }
  

    let onPurchase = () => {
      this.stacknavigator.dispatch(
        NavigationActions.navigate({routeName: "Checkout"})
      );
    }

    return {
      ...this.state,
      onAddToCart,
      onPurchase
    }
  }
  componentDidMount() {SplashScreen.hide();}
  render() {
    return (
      <View style={{flex: 1}}>
        <StackedApp ref={ref => this.stacknavigator = ref} screenProps={this.appManager()} />
        <Toast ref={ref => this.toast = ref} />
      </View>
    );
  }
}

const StackedApp = createStackNavigator(
  {
    Home: {
      screen: (props) => {
        return (<TabbedApp
          screenProps={{...props.screenProps, ...{stacknavigation: props.navigation}}}
        />)
      },
      navigationOptions: {header: null},
    },
    Checkout: {
      screen: ScreenCheckout,
      navigationOptions: {
        headerTransparent: true
      }
    }
  },
  {}
)

let TabbedApp = createCustomBottomTabNavigator([
  {name: "Home", component: ScreenHome, icon: require('./images/nav_button_home.png')},
  {name: "Restaurants", component: ScreenRestaurants, icon: require('./images/nav_button_restaurants.png')},
  {name: "Menu", component: ScreenListMenu, icon: require('./images/nav_button_menu.png')},
  {name: "Cart", component: ScreenCart, icon: require('./images/nav_button_orders.png')},
  
]);



export default App;
