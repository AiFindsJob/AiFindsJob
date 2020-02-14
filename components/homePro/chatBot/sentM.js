import React, { Component } from 'react';
import { Text,Image, View, Modal,Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import primary from '../../properties';


const w = Math.round(Dimensions.get('window').width);
const h = Math.round(Dimensions.get('window').height);

class SentM extends Component {
  render() {
    return (
      <View style={{margin:20,marginBottom:0,flexDirection:'row',alignSelf:'flex-end'}}>
           <View style={{flexDirection:'row'}}>
               <View style={{width:w/1.5,minHeight:50,borderRadius:9,borderTopRightRadius:0,backgroundColor:primary}}>
  <Text style={{color:'#fff',fontSize:18,margin:12}}>{this.props.mess}</Text>
               </View>
               <View style={{width:0,height:0,backgroundColor:'transparent',borderStyle:'solid',borderLeftWidth:20,borderBottomWidth:30,borderLeftColor:primary,borderRightColor:'transparent',borderBottomColor:'transparent'}}>

               </View>
           </View>
      </View>          
    );
  }
}


export default SentM