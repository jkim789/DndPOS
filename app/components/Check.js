import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Picker,
	TextInput,
} from 'react-native';
import BuyItem from './BuyItem.js'


export default class Check extends Component{
    constructor(){
        super()
        this.state = {
            item  : 'A Soda',
            price : '',
						buyItemArray: [{item: 'Haircut', price: 20}]
        }
    }

		async addBuyItem (){
			if(this.state.price){
				let newObj = {
					item: this.state.item,
					price: +this.state.price
				}
				this.state.buyItemArray.push(newObj);
					this.setState({buyItemArray: this.state.buyItemArray})
					this.setState({price: ''})
				
			}
		}


		deleteBuyItem(key){
			this.state.buyItemArray.splice(key,1);
			this.setState({buyItemArray: this.state.buyItemArray})
		}


    render(){
			console.log(this.state.buyItemArray)
        return (

            <View style={styles.mainContainer}>
							<Text style={{fontSize:20, alignSelf:'center'}}> {'#'+this.props.navigation.state.params.checkNum} </Text>
							<ScrollView style={styles.scrollContainer}>

								{	
									this.state.buyItemArray.map((val, index)=>{
										return (
											<BuyItem 
												key={index}
												val={val}
												deleteMethod={()=>this.deleteBuyItem(index)}
												></BuyItem>
										)
									})
									
								}

							</ScrollView>
								<View style={styles.footer}>
									<Picker
									style={styles.picker}
									selectedValue={this.state.item}
									onValueChange={(itemValue, itemIndex) => this.setState({item: itemValue})}>
										<Picker.Item label="A Soda" value="Peach Cocktail" />
										<Picker.Item label="Some Appetizer" value="Some Chips" />
										<Picker.Item label="Some Food" value="Service 1" />
										<Picker.Item label="Other Service" value="Service 2" />
									</Picker>

          				<TextInput 
										style={styles.textInput} 
										onChangeText={(textInput)=> this.setState({price: (textInput)})} 
										value={this.state.price} 
										placeholder='<Price Here>'
										placeholderTextColor='white'>
									</TextInput>

									<TouchableOpacity onPress={this.addBuyItem.bind(this)} style={styles.addButton}>
            				<Text style={styles.addButtonText}> + </Text>
									</TouchableOpacity>
								</View>
            </View>
        );
    }

}



let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1,
    },
		picker: {
			flex: 1,
			overflow: 'visible',
			marginBottom: 30
		},
		textInput: {
			padding: 4,
			marginRight: 5,
			flex: 1,
			fontSize: 20,
			backgroundColor: '#252525',
			borderWidth: 1,
			borderColor: '#48afdb',
			borderRadius: 20,
			color: '#48BBEC'
		},

		addButtonText: {
			color: '#fff',
			fontSize: 30,
		},
		addButton: {
			backgroundColor: '#26E5FE',
			width: 50,
			height: 40,
			borderRadius: 20,
			borderColor: '#ccc',
			alignItems: 'center',
			justifyContent: 'center',
			marginRight: 5,
			marginBottom: 0,
		},
		footer: {
			flex : 1,
			backgroundColor: 'rgba(0,0,0,0)',
			flexDirection: 'row',
			position: 'absolute',
			alignItems: 'center',
			bottom: 0,
			left: 0,
			right: 0,
			height: 40
		},

    text        : {
        marginTop   : 40,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
})