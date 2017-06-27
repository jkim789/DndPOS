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

export default class Customer extends Component {
  constructor(){
    super()
    this.state = {
        checkNum : '001',
        isDocked        : false,
        shouldRenderDragable : false,
        dragItemValues  : null,
        dropZoneValues  : null,
        pan             : new Animated.ValueXY()
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const checkNum = '#101'
    return (
    <View style={this.state.isDocked? styles.draggableContainerDocked:null}>
      <View style={styles.draggableContainer}>
          <Animated.Image 
              {...this.panResponder.panHandlers}
              source={this.state.isDocked? relaxing3dGuy : personIcon}
              onLayout={this.setDragItemValues.bind(this)}                     
              style={this.state.isDocked? [this.state.pan.getLayout(),styles.circleAlt] : [this.state.pan.getLayout(), styles.circle]}>
                <Text style={styles.personText}></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
              <TouchableOpacity style={{
                backgroundColor: 'rgba(0,0,0,0)'
              }} onPress={() => navigate('Check')} title="Check">
                <Text style={styles.checkButtonText}> {`CHECK ${checkNum}`} </Text>
              </TouchableOpacity>
          </Animated.Image>
      </View>
    </View>        
    );
    // return (
    //     <TouchableOpacity onPress={this.props.deleteMethod} style={styles.comment}>
    //       <Text style={styles.commentText}>Date: {this.props.val.date}</Text>
    //       <View key={this.props.index} style={styles.nestedContainer}>
    //         <Text style={styles.commentText}>{this.props.val.comment}</Text>
    //       </View>
    //     </TouchableOpacity>
    // );
  }
}

let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
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

