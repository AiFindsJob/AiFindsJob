import React from 'react';
import {
  StyleSheet,Image,
  View,Dimensions,
  Text,TouchableHighlight,
} from 'react-native';
import primary from './properties'
import PasswordInputText from './passwordInput'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextField } from 'react-native-material-textfield';

const h = Math.round(Dimensions.get('window').height);
const w = Math.round(Dimensions.get('window').width);

class SignIn extends React.Component{  
  render(){
    const {navigate} = this.props.navigation;  
  return (
    <View style={{height:h,backgroundColor:'#fff',flex:1}}>
      <View style={{padding:30}}><Text style={{fontFamily:'Raleway-Medium',fontSize:33,color:'#384452'}}>Welcome back</Text></View>
      <View style={{paddingLeft:30,marginTop:-20}}><Text style={{fontFamily:'Raleway-light',paddingTop:-25,fontSize:20,color:'#9ba7b5'}}>Sign in to continue</Text></View>
      <View style={{margin:30,flex:0,top:'8%'}}>
        <TextField style={{paddingBottom:5}} label="Email/Phone">
          <Icon style={styles.icon}
                    name='visibility-off'
                    size={25}
                    color="#222222"
          />
        </TextField>
      </View>
      <View style={{margin:30,flex:0,top:10}}><PasswordInputText lab="Password" style={{paddingBottom:5}}  ></PasswordInputText></View>
      <View style={{flexDirection:'column',}}>
        <View style={{}} onStartShouldSetResponder={()=>{navigate('ForgetPassword')}}>
        <Text style={{fontFamily:'Raleway-light',fontSize:14,color:'#9ba7b5',textAlign:'right',margin:20,marginTop:-10,flex:0}}>Forgot password?</Text></View>
      </View>
      <TouchableHighlight>
        <View onStartShouldSetResponder={()=>{navigate('MainHome')}}  style={{height:60,borderRadius:9,justifyContent:'center',alignSelf:'center',width:300,backgroundColor:primary,shadowColor: "#00c3ee",
          elevation: 10,}}>
            <Text style={{textAlign:'center',fontSize:20,color:'white'}}>
              SIGN IN
            </Text>
        </View>
      </TouchableHighlight>
      <Text style={{fontFamily:'Raleway-light',fontSize:20,color:'#9ba7b5',textAlign:'center',margin:20,flex:0}}>OR</Text>
        <TouchableHighlight>
        <View style={{height:60,borderRadius:9,borderWidth:1,borderColor:primary,justifyContent:'center',alignSelf:'center',width:300,backgroundColor:'white',
          elevation: 10,}}>
            
            <Text style={{textAlign:'center',fontSize:20,color:primary,padding:10,paddingTop:-10}}>
              <Image source={require('../assets/G.png')} style={{width:28,height:28}}></Image>
              <Text > SIGN IN WITH GOOGLE</Text>
            </Text>
        </View>
      </TouchableHighlight>
      <View style={{marginTop:-20}} onStartShouldSetResponder={()=>{navigate('CreateAccout')}}>
          <Text style={{textAlign:'center',fontSize:14,margin:20,padding:10,color:'#9ba7b5'}}>Don't have an account? <Text style={{fontWeight:'bold',fontSize:16,color:primary}}>Create Now</Text></Text>
      </View>
    </View>
  );
        };
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

export default SignIn;
