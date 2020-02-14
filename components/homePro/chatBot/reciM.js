import React, { Component } from 'react';
import { Text,Image, View, Modal,Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import primary from '../../properties';


const w = Math.round(Dimensions.get('window').width);
const h = Math.round(Dimensions.get('window').height);

class ReciM extends Component {
  render() {
    return (
      <View style={{margin:20,marginBottom:0,flexDirection:'row'}}>
           <View style={{flexDirection:'row'}}>
               <View style={{width:0,height:0,backgroundColor:'transparent',borderStyle:'solid',borderRightWidth:20,borderBottomWidth:30,borderRightColor:primary,borderLeftColor:'transparent',borderBottomColor:'transparent'}}>
               </View>
               <View style={{width:w/1.5,minHeight:50,borderRadius:9,borderTopLeftRadius:0,backgroundColor:primary}}>
  <Text style={{color:'#fff',fontSize:18,margin:12}}>{this.props.mess}</Text>
               </View>
               
           </View>
      </View>          
    );
  }
}


export default ReciM