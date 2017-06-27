import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  ScrollView,
  TouchableOpacity,
  Animated,
  Image,
  PanResponder,
  Navigator
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class BuyItem extends Component {
  render(){
    return (
        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.comment}>
          <Text style={styles.buyItemText}> 
            {this.props.val.item} 
          </Text>
          <View key={this.props.index} style={styles.nestedContainer}>
            <Text style={styles.buyItemText}> {this.props.val.price} </Text>
          </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  comment: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'grey',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingRight: 50,
    paddingLeft: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  buyItemText: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 20,
  },
  nestedContainer: {
    flex:1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
  },
  commentDeleteText: {
    color: 'white',
    borderBottomColor: 'red',
    borderBottomWidth: 10
  }
});
