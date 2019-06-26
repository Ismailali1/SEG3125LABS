import React, {Component} from 'react';
import {Image, ImageBackground, View, StyleSheet, Text, FlatList, TouchableHighlight} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Header from '../../general/Header';
import ImageContent from '../../library/ImageContent';


class ScreenRestaurants extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      data: [
  		{name:"Nando's"},
  		{name:"India Palace"},
  		{name:"Pizza Empire"},
  		{name:"Shawarma King"}
		]
      
    };
}

  render() {
    return (
        <View style={[styles.container, this.props.style]}>
        <Header style={styles.header}>Restaurants</Header>
        <List>
          <FlatList
	    data={this.state.data}
            
	    renderItem={({ item }) =>
		<TouchableHighlight onPress={() => this.props.navigation.navigate('Menu')}>
      			<ListItem
                		title={`${item.name}`}
              		/>
		</TouchableHighlight>}
          />
        </List>
</View>
      
    );
  }

}



const styles = StyleSheet.create({
  container: {flex: 1},
  header: {flex: 1, backgroundColor: '#d90315'},
  content: {flex: 11},
});

export default ScreenRestaurants;
