import React from 'react';
import {
  StyleSheet,Image,
  View,
  Text,TouchableHighlight,Dimensions,
} from 'react-native';
import primary from './properties'
import PasswordInputText from './passwordInput'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextField } from 'react-native-material-textfield';
const h = Math.round(Dimensions.get('window').height);
const w = Math.round(Dimensions.get('window').width);

class Registration extends React.Component {
  render(){
const {navigate} = this.props.navigation; 
  return (
    <View style={{height:h,backgroundColor:'#fff',flex:1}}>
      <View style={{padding:30}}><Text style={{fontFamily:'Raleway-Medium',fontSize:33,color:'#384452'}}>Welcome</Text></View>
      <View style={{paddingLeft:30,marginTop:-20}}><Text style={{fontFamily:'Raleway-light',paddingTop:-25,fontSize:20,color:'#9ba7b5'}}>Sign up to continue</Text></View>
      <View style={{margin:30,flex:0,top:'8%'}}>
         <TextField style={{paddingBottom:5}} label="User name">
         <Icon style={styles.icon}
                    name='visibility-off'
                    size={25}
                    color="#222222"
         />
        </TextField>
        <TextField style={{paddingBottom:5}} label="Email/Phone">
          <Icon style={styles.icon}
                    name='visibility-off'
                    size={25}
                    color="#222222"
          />
        </TextField>
      </View>
     <View style={{margin:30,flex:0,top:10}}><PasswordInputText style={{paddingBottom:5}} lab="Password" ></PasswordInputText></View>
      <View style={{flexDirection:'column',}}>
        <View style={{}} onStartShouldSetResponder={()=>{navigate('Signin')}}>
        
        </View></View>
      <TouchableHighlight>
        <View style={{height:60,borderRadius:9,justifyContent:'center',alignSelf:'center',width:300,backgroundColor:primary,shadowColor: "#00c3ee",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.35,
          shadowRadius: 4,
          elevation: 10,}}>
            <Text style={{textAlign:'center',fontSize:20,color:'white'}}>
              SIGN UP
            </Text>
        </View>
      </TouchableHighlight>
      <View style={{flexDirection:'row',margin:20,padding:10,justifyContent:'center'}}>
           <Text style={{fontSize:14,color:'#9ba7b5'}}>Already have an account? </Text>
           <View style={{}} onStartShouldSetResponder={()=>{navigate('Signin')}}>
             <Text style={{fontWeight:'bold',fontSize:16,color:primary}}>Sign In</Text>
            </View></View>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  icon: {
        position: 'absolute',
        top: 33,
        right: 0,
        color:'#222222'
    },
  engine: {
    position: 'absolute',
    right: 0,
  },
});

export default Registration;
