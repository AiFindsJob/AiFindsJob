import React,{Component} from 'react';
import {Text,View,Image,Constructor,Dimensions} from  'react-native';
import primary from '../properties';
const w = Math.round(Dimensions.get('window').width);
const h = Math.round(Dimensions.get('window').height);
class User extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'#fff',height:h,width:w}}>
        <View style={{flex:1,alignItems:'center',backgroundColor:primary,elevation:20}}>
          <Image style={{width: 150, height: 150,borderRadius:75,marginTop:50}} source={{uri:'https://source.unsplash.com/1024x768/?boy'}}></Image>
          <Text style={{fontSize:20,fontWeight:'bold',marginTop:20,color:'#fff'}}>Name</Text>
          <Text style={{fontSize:18,marginTop:20,color:'#fff'}}>example@gmail.com</Text>
          <View >
            <Text style={{fontSize:18,marginTop:20}}>Update your profile</Text>
          </View>
        </View>
        <View style={{flex:1}}>

        </View>
      </View>
    );
  }
}
export default User;