/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  PanResponder,
  Animated,
  Dimensions,
  View,
  NativeModules,
  UIManager,
  findNodeHandle,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import dbRefStore from '../../index.ios';


import Check from '../components/Check.js';

var relaxing3dGuy  = {
  uri: 'https://previews.123rf.com/images/snake3d/snake3d1611/snake3d161100086/65758620-Relaxing-beach-deck-chair-man-smile-cartoon-character-chilling-stylized-summer-sunglass-person-sun-l-Stock-Illustration.jpg'
}
var seatIcon = require('../icons/seat.jpg')
var personIcon = require('../icons/personIcon.png')


let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');

export default class CustomerContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
        currentCheckNum        : [],
        isDocked        : false,
        customerArray   : [],
        shouldRenderDragable : false,
        dragItemValues  : null,
        dropZone1Values  : null,
        dropZone2Values  : null,
        dropZone3Values  : null,
        dropZone4Values  : null,
        dropZone5Values  : null,
        dropZone6Values  : null,
        dropZone7Values  : null,
        dropZone8Values  : null,
        dropZone9Values  : null,
        dropZone10Values  : null,
        pan             : new Animated.ValueXY()
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder : () => true,
        onPanResponderMove         : Animated.event([null,{
            dx : this.state.pan.x,
            dy : this.state.pan.y
          }]),
      onPanResponderRelease           : (e, gesture) => {
        this.state.pan.setOffset({x: this.currentPanValue.x, y: this.currentPanValue.y});
        this.state.pan.setValue({x: 0, y: 0});
        if(this.isDropZone(gesture)){
            this.setState({
                isDocked      : true
            });
        }else{
            this.setState({
                isDocked      : false
            });
        }
      }
    });
  } 

  static navigationOptions = {
    title: 'Store Map'
  }

    isDropZone(gesture){
      var dz1 = this.state.dropZone1Values;
      var isYofDz1 = gesture.moveY > (dz1.y) && gesture.moveY < dz1.y + dz1.height
      var isXofDz1 = gesture.moveX > dz1.x && gesture.moveX < dz1.x + dz1.width
      var isDropZone1 = isYofDz1 === true && isXofDz1 === true
      
      var dz2 = this.state.dropZone2Values;
      var isYofDz2 = gesture.moveY > (dz2.y) && gesture.moveY < dz2.y + dz2.height
      var isXofDz2 = gesture.moveX > dz2.x && gesture.moveX < dz2.x + dz2.width
      var isDropZone2 = isYofDz2 === true && isXofDz2 === true
    
      var dz3 = this.state.dropZone3Values;
      var isYofDz3 = gesture.moveY > (dz3.y) && gesture.moveY < dz3.y + dz3.height
      var isXofDz3 = gesture.moveX > dz3.x && gesture.moveX < dz3.x + dz3.width
      var isDropZone3 = isYofDz3 === true && isXofDz3 === true

      var dz4 = this.state.dropZone4Values;
      var isYofDz4 = gesture.moveY > (dz4.y) && gesture.moveY < dz4.y + dz4.height
      var isXofDz4 = gesture.moveX > dz4.x && gesture.moveX < dz4.x + dz4.width
      var isDropZone4 = isYofDz4 === true && isXofDz4 === true

      var dz5 = this.state.dropZone5Values;
      var isYofDz5 = gesture.moveY > (dz5.y) && gesture.moveY < dz5.y + dz5.height
      var isXofDz5 = gesture.moveX > dz5.x && gesture.moveX < dz5.x + dz5.width
      var isDropZone5 = isYofDz5 === true && isXofDz5 === true

      var dz6 = this.state.dropZone6Values;
      var isYofDz6 = gesture.moveY > (dz6.y) && gesture.moveY < dz6.y + dz6.height
      var isXofDz6 = gesture.moveX > dz6.x && gesture.moveX < dz6.x + dz6.width
      var isDropZone6 = isYofDz6 === true && isXofDz6 === true

      var dz7 = this.state.dropZone7Values;
      var isYofDz7 = gesture.moveY > (dz7.y) && gesture.moveY < dz7.y + dz7.height
      var isXofDz7 = gesture.moveX > dz7.x && gesture.moveX < dz7.x + dz7.width
      var isDropZone7 = isYofDz7 === true && isXofDz7 === true

      var dz8 = this.state.dropZone8Values;
      var isYofDz8 = gesture.moveY > (dz8.y) && gesture.moveY < dz8.y + dz8.height
      var isXofDz8 = gesture.moveX > dz8.x && gesture.moveX < dz8.x + dz8.width
      var isDropZone8 = isYofDz8 === true && isXofDz8 === true

      var dz9 = this.state.dropZone9Values;
      var isYofDz9 = gesture.moveY > (dz9.y) && gesture.moveY < dz9.y + dz9.height
      var isXofDz9 = gesture.moveX > dz9.x && gesture.moveX < dz9.x + dz9.width
      var isDropZone9 = isYofDz9 === true && isXofDz9 === true

      var dz10 = this.state.dropZone10Values;
      var isYofDz10 = gesture.moveY > (dz10.y) && gesture.moveY < dz10.y + dz10.height
      var isXofDz10 = gesture.moveX > dz10.x && gesture.moveX < dz10.x + dz10.width
      var isDropZone10 = isYofDz10 === true && isXofDz10 === true

      return isDropZone1===true || isDropZone2===true || isDropZone3===true || isDropZone4===true || isDropZone5===true || isDropZone6===true || isDropZone7===true || isDropZone8===true || isDropZone9===true || isDropZone10===true
    }

    componentDidMount(){
      this.currentPanValue = {x: 0, y: 0};
      this.panListener = this.state.pan.addListener((value) => this.currentPanValue = value);
        this.setState({
          dropZone1Values: this.props.dropZone1Values,
          dropZone2Values: this.props.dropZone2Values,
          dropZone3Values: this.props.dropZone3Values,
          dropZone4Values: this.props.dropZone4Values,
          dropZone5Values: this.props.dropZone5Values,
          dropZone6Values: this.props.dropZone6Values,
          dropZone7Values: this.props.dropZone7Values,
          dropZone8Values: this.props.dropZone8Values,
          dropZone9Values: this.props.dropZone9Values,
          dropZone10Values: this.props.dropZone10Values
        })

    }

    componentWillReceiveProps(newProps){
        this.setState({
          dropZone1Values: newProps.dropZone1Values,
          dropZone2Values: newProps.dropZone2Values,
          dropZone3Values: newProps.dropZone3Values,
          dropZone4Values: newProps.dropZone4Values,
          dropZone5Values: newProps.dropZone5Values,
          dropZone6Values: newProps.dropZone6Values,
          dropZone7Values: newProps.dropZone7Values,
          dropZone8Values: newProps.dropZone8Values,
          dropZone9Values: newProps.dropZone9Values,
          dropZone10Values: newProps.dropZone10Values
        })
    }

    setDragItemValues(event){

      this.setState({
          dragItemValues : event.nativeEvent.layout
      });
    }

    onCheckPress(checkNum){
      console.log(checkNum)
      this.props.navigation.navigate('Check',{checkNum: checkNum})
    }
    
    render(){ 
        const checkNum = this.state.currentCheckNum
        return (
        <View style={this.state.isDocked ? styles.draggableContainerDocked:null}>
          <View style={styles.draggableContainer}>
              <Animated.Image 
                  {...this.panResponder.panHandlers}
                  source={this.state.isDocked? relaxing3dGuy : personIcon}
                  onLayout={this.setDragItemValues.bind(this)}                     
                  style={this.state.isDocked? [this.state.pan.getLayout(),styles.circleAlt] : [this.state.pan.getLayout(), styles.circle]}>
                <TouchableOpacity onPress={this.props.deleteMethod}>
                    <Text style={styles.xButton}> X </Text>
                </TouchableOpacity>
                    <Text style={styles.personText}></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                  <TouchableOpacity style={{
                    backgroundColor: 'rgba(0,0,0,0)'
                    }} onPress={() => this.onCheckPress(this.props.checkNum)} 
                    title="Check">
                    <Text style={styles.checkButtonText}> {`CHECK ${this.props.checkNum}`} </Text>
                  </TouchableOpacity>
              </Animated.Image>
          </View>
        </View>   
        );
      }
}


let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    xButton: {
        backgroundColor: 'red',
        position: 'absolute'
    },

    addButton: {
    backgroundColor: '#26E5FE',
    width: 50,
    height: 60,
    borderRadius: 20,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginBottom: 0,
    zIndex: 10
    },
    addButtonText: {
      color: '#fff',
      fontSize: 30,
    },
    dropZone    : {
        top: 0,
        alignItems: 'center',
        alignSelf: 'center',
        width          : 100,
        height         : 100,
        backgroundColor:'grey'
    },
    personText: {
        marginTop: 0,
        alignSelf   : 'center',
        textAlign   : 'center',
        color       : 'red'
    },
    checkButtonTextAlt: {
        fontSize: 10,
        backgroundColor: 'green',
        alignSelf: 'center',
        textAlign   : 'center',
        fontWeight: 'bold',
        color       : '#fff'
    },
    checkButtonText: {
        fontSize: 8,
        backgroundColor: 'green',
        alignSelf: 'center',
        textAlign   : 'center',
        fontWeight: 'bold',
        color       : '#fff'
    },
    dropZoneText        : {
        fontSize: 14,
        alignSelf: 'center',
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainerDocked: {
        top         : 0,
        left        : 0,
    },
    draggableContainer: {
        flex: 1,
        overflow: 'visible',
        flexDirection : 'column',
        position : 'absolute',
        backgroundColor: 'red',
        height: 100,
        top         : 0,
        left        : 50,
    },
    circleAlt : {

        justifyContent: 'flex-end',
        position: 'absolute',
        backgroundColor     : 'rgba(0,0,0,0)',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
    },
    circle      : {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        flex : 1,
        position: 'absolute',
        backgroundColor     : 'rgba(0,0,0,0)',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
    }
});

