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
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import * as firebase from 'firebase'

import Check from './app/components/Check.js';
import CustomerContainer from './app/containers/CustomerContainer'

var relaxing3dGuy  = {
  uri: 'https://previews.123rf.com/images/snake3d/snake3d1611/snake3d161100086/65758620-Relaxing-beach-deck-chair-man-smile-cartoon-character-chilling-stylized-summer-sunglass-person-sun-l-Stock-Illustration.jpg'
}
var seatIcon = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7uPXggFFLO2hPz_NfQBY7QJrKUM7HyydlEric1dxHk2xzi5n'
}
var personIcon = require('./app/icons/personIcon.png')


var config = {
  apiKey: "AIzaSyAIboFt_FjWRx0UZdIaU7oQwGLa_ER1z4w",
  authDomain: "draganddrop-d5cc7.firebaseapp.com",
  databaseURL: "https://draganddrop-d5cc7.firebaseio.com",
  projectId: "draganddrop-d5cc7",
  storageBucket: "",
  messagingSenderId: "879064799343"
};
firebase.initializeApp(config);

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');

export default class dragAndDropScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
        currentCheckNum        : [101,102,103],
        isDocked        : false,
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

    componentDidMount(){                      //can be just in child
      this.currentPanValue = {x: 0, y: 0};
      this.panListener = this.state.pan.addListener((value) => this.currentPanValue = value);
    
      const rootRef = firebase.database().ref('/currentCheckNum')
      rootRef.on('value', snap=> {
        console.log(snap.val())
        this.setState({
          currentCheckNum: snap.val()
        });
      })
    }

    setDropZone1Values(event){                 // hardcoding for the sake of time
      var layout;
          this.refs.dz1.measure( (fx, fy, width, height, px, py) => {
            Window
              this.setState({
                  dropZone1Values : {width,height,x:px, y:py}
              });
      })
    }
    setDropZone2Values(event){                 // hardcoding for the sake of time
      var layout;
          this.refs.dz2.measure( (fx, fy, width, height, px, py) => {
              this.setState({
                  dropZone2Values : {width,height,x:px, y:py}
              });
      })
    }
    setDropZone3Values(event){                 // hardcoding for the sake of time
      var layout;
          this.refs.dz3.measure( (fx, fy, width, height, px, py) => {
              this.setState({
                  dropZone3Values : {width,height,x:px, y:py}
              });
      })
    }
    setDropZone4Values(event){                 // hardcoding for the sake of time
      var layout;
          this.refs.dz4.measure( (fx, fy, width, height, px, py) => {
              this.setState({
                  dropZone4Values : {width,height,x:px, y:py}
              });
      })
    }
    setDropZone5Values(event){                 // hardcoding for the sake of time
      var layout;
          this.refs.dz5.measure( (fx, fy, width, height, px, py) => {
              this.setState({
                  dropZone5Values : {width,height,x:px, y:py}
              });
      })
    }
    setDropZone6Values(event){                 // hardcoding for the sake of time
      var layout;
          this.refs.dz6.measure( (fx, fy, width, height, px, py) => {
              this.setState({
                  dropZone6Values : {width,height,x:px, y:py}
              });
      })
    }
    setDropZone7Values(event){                 // hardcoding for the sake of time
      var layout;
          this.refs.dz7.measure( (fx, fy, width, height, px, py) => {
              this.setState({
                  dropZone7Values : {width,height,x:px, y:py}
              });
      })
    }
    setDropZone8Values(event){                 // hardcoding for the sake of time
      var layout;
          this.refs.dz8.measure( (fx, fy, width, height, px, py) => {
              this.setState({
                  dropZone8Values : {width,height,x:px, y:py}
              });
      })
    }
    setDropZone9Values(event){                 // hardcoding for the sake of time
      var layout;
          this.refs.dz9.measure( (fx, fy, width, height, px, py) => {
              this.setState({
                  dropZone9Values : {width,height,x:px, y:py}
              });
      })
    }
    setDropZone10Values(event){                 // hardcoding for the sake of time
      var layout;
          this.refs.dz10.measure( (fx, fy, width, height, px, py) => {
              this.setState({
                  dropZone10Values : {width,height,x:px, y:py}
              });
      })
    }

    setDragItemValues(event){
      this.setState({
          dragItemValues : event.nativeEvent.layout
      });
    }

  addCustomer(){
      var nextNum = this.state.currentCheckNum[this.state.currentCheckNum.length-1]+1 || 101
      this.state.currentCheckNum.push(nextNum);
      this.setState({
        currentCheckNum: this.state.currentCheckNum,
      })
      this.setState({
        dropZone1Values: this.state.dropZone1Values
      })
      this.setState({
        dropZone2Values: this.state.dropZone2Values
      })
      this.setState({
        dropZone3Values: this.state.dropZone3Values
      })
      this.setState({
        dropZone4Values: this.state.dropZone4Values
      })
      this.setState({
        dropZone5Values: this.state.dropZone5Values
      })
      this.setState({
        dropZone6Values: this.state.dropZone6Values
      })
      this.setState({
        dropZone7Values: this.state.dropZone7Values
      })
      this.setState({
        dropZone8Values: this.state.dropZone8Values
      })
      this.setState({
        dropZone9Values: this.state.dropZone9Values
      })
      this.setState({
        dropZone10Values: this.state.dropZone10Values
      })

  }

  deleteCustomer(checkNum){
    var checkNumIndex = this.state.currentCheckNum.indexOf(checkNum)
    this.state.currentCheckNum.splice(checkNumIndex,1);
    this.setState({currentCheckNum: this.state.currentCheckNum})
  }
    
    render() {
      let customer = this.state.currentCheckNum.map((checkNum,index)=>{
                      return (<CustomerContainer
                              key={checkNum} 
                              navigation={this.props.navigation}
                              dropZone1Values={this.state.dropZone1Values}
                              dropZone2Values={this.state.dropZone2Values}
                              dropZone3Values={this.state.dropZone3Values}
                              dropZone4Values={this.state.dropZone4Values}
                              dropZone5Values={this.state.dropZone5Values}
                              dropZone6Values={this.state.dropZone6Values}
                              dropZone7Values={this.state.dropZone7Values}
                              dropZone8Values={this.state.dropZone8Values}
                              dropZone9Values={this.state.dropZone9Values}
                              dropZone10Values={this.state.dropZone10Values}
                              checkNum={checkNum}
                              deleteMethod={()=>this.deleteCustomer(checkNum)}
                              />)
                      })


        return (
            <View style={styles.mainContainer}>

              <Grid style={styles.grid}>
                <Row style={styles.row}>
                  <View style={styles.seatWrapper}>
                    <Image
                      source={seatIcon}
                      style={styles.dropZone}
                      ref="dz1"
                      onLayout={this.setDropZone1Values.bind(this)}>

                        <Text style={styles.dropZoneText}> Seat 1</Text>

                    </Image>
                  </View>
                  <View style={styles.seatWrapper}>
                    <Image
                      source={seatIcon}
                      style={styles.dropZone}
                      ref="dz2"
                      onLayout={this.setDropZone2Values.bind(this)}>

                        <Text style={styles.dropZoneText}> Seat 2</Text>

                    </Image>
                  </View>
                </Row>

                <Row style={styles.row}>
                  <View style={styles.seatWrapper}>
                    <Image
                      source={seatIcon}
                      style={styles.dropZone}
                      ref="dz3"
                      onLayout={this.setDropZone3Values.bind(this)}>

                        <Text style={styles.dropZoneText}> Seat 3</Text>

                    </Image>
                  </View>
                  <View style={styles.seatWrapper}>
                    <Image
                      source={seatIcon}
                      style={styles.dropZone}
                      ref="dz4"
                      onLayout={this.setDropZone4Values.bind(this)}>

                        <Text style={styles.dropZoneText}> Seat 4</Text>

                    </Image>
                  </View>
                </Row>

                <Row style={styles.row}>
                  <View style={styles.seatWrapper}>
                    <Image
                      source={seatIcon}
                      style={styles.dropZone}
                      ref="dz5"
                      onLayout={this.setDropZone5Values.bind(this)}>

                        <Text style={styles.dropZoneText}> Seat 5</Text>

                    </Image>
                  </View>
                  <View style={styles.seatWrapper}>
                    <Image
                      source={seatIcon}
                      style={styles.dropZone}
                      ref="dz6"
                      onLayout={this.setDropZone6Values.bind(this)}>

                        <Text style={styles.dropZoneText}> Seat 6</Text>

                    </Image>
                  </View>
                </Row>

                <Row style={styles.row}>
                  <View style={styles.seatWrapper}>
                    <Image
                      source={seatIcon}
                      style={styles.dropZone}
                      ref="dz7"
                      onLayout={this.setDropZone7Values.bind(this)}>

                        <Text style={styles.dropZoneText}> Seat 7</Text>

                    </Image>
                  </View>
                  <View style={styles.seatWrapper}>
                    <Image
                      source={seatIcon}
                      style={styles.dropZone}
                      ref="dz8"
                      onLayout={this.setDropZone8Values.bind(this)}>

                        <Text style={styles.dropZoneText}> Seat 8</Text>

                    </Image>
                  </View>
                </Row>

                <Row style={styles.row}>
                  <View style={styles.seatWrapper}>
                    <Image
                      source={seatIcon}
                      style={styles.dropZone}
                      ref="dz9"
                      onLayout={this.setDropZone9Values.bind(this)}>

                        <Text style={styles.dropZoneText}> Seat 9</Text>

                    </Image>
                  </View>
                  <View style={styles.seatWrapper}>
                    <Image
                      source={seatIcon}
                      style={styles.dropZone}
                      ref="dz10"
                      onLayout={this.setDropZone10Values.bind(this)}>

                        <Text style={styles.dropZoneText}> Seat 10</Text>

                    </Image>
                  </View>
                </Row>

              </Grid>

              {customer}

                <TouchableOpacity 
                onPress={this.addCustomer.bind(this)} 
                style={styles.addButton}>
                  
                  <Text style={styles.addButtonText}> + </Text>

                </TouchableOpacity>
                
            </View>
        );
    }


}

/* <<<<<<<<<< CONTAINER >>>>>>>>>>>>> */


let dragAndDropApp = StackNavigator({
  dragAndDropScreen: { 
    screen: dragAndDropScreen,
    navigationOptions: {
      title: 'Store Map'
    }
  },
  Check: { 
    screen: Check,
    navigationOptions: {
      title: 'Check'
    }
  }
});

AppRegistry.registerComponent('dragAndDrop', () => dragAndDropApp);


//  <<<<<<<<<<  STYLES   >>>>>>>>>>>>>

let styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        maxWidth: '100%',
        alignSelf: 'stretch'
    },

    seatWrapper:{
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'space-between'
    },
    grid:{
      backgroundColor: 'transparent'
    },
    row:{
        maxWidth: '100%',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'baseline',
        alignSelf: 'stretch',
        height         : 100,
    },
    nestedContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        alignContent: 'stretch',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'red'
    },
    rows: {
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'baseline',
        alignSelf: 'stretch',
        height         : 100,
        backgroundColor: 'blue'
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
        overflow: 'hidden',
        alignItems: 'center',
        alignSelf: 'center',
        width          : 100,
        height         : 100,
        backgroundColor:'grey'
    },
    dropZoneText        : {
        fontSize: 14,
        backgroundColor: 'transparent',
        alignSelf: 'center',
        textAlign   : 'center',
        color       : 'blue',
        fontWeight: 'bold'
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
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
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