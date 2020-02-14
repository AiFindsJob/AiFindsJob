import React, { Component } from 'react';  
import { View,Dimensions,Alert, Text, StyleSheet, Button,Image, Modal } from 'react-native';  
import Icon from 'react-native-vector-icons/MaterialIcons';  
import Search from '../../homePro/search';
import { TouchableHighlight, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import primary from '../../properties'
import Aboutus from '../../homePro/about';
import Dcont from './DrawerCon';
import ChatBotHome from '../../homePro/chatBot/chatBotHome';
import ContactUs from '../../homePro/contactus';
const w = Math.round(Dimensions.get('window').width);
const h = Math.round(Dimensions.get('window').height);
const m=w/1.2;
const s=w-m;
class MainDrawer extends React.Component {
  
constructor(props){
  super(props);
  this.state={show:false,
    about:false,
    bot:false,
    contact:false,
  };
};
_contactShow=()=>{
    this.setState({contact:true});
  this.setState({show:false});
}
_contactHide=()=>{
    this.setState({contact:false});
}
_aboutShow=()=>{
  this.setState({about:true});
  this.setState({show:false});
}
_botShow=()=>{
  this.setState({bot:true});
  this.setState({show:false});
}
_botHide=()=>{
    this.setState({bot:false});
}
_aboutHide=()=>{
  this.setState({about:false});
}
_shows=()=>{
    this.setState({show:true})
}
_hide=()=>{
    this.setState({show:false})
}

    render() {

          
        return(

          
    <View>
          {/**Header**/}         
        <View style={{backgroundColor:'white',height:50,flexDirection:'row',justifyContent:'space-between',
          elevation: 3,}}>
              <Icon style={{ marginLeft:10,marginRight:10,elevation:30}}  
                    onPress={this._shows}  
                    name="menu"  
                    size={50}  
                    color={primary}/> 
              <Search/>
        </View>

          {/**Drawer**/}   
        <Modal  transparent={true} visible={this.state.show} >
        <View style={{flexDirection:'row',flex:1,}}>
           <View style={{height:h,width:m,marginLeft:0,backgroundColor:'#fff',elevation:10}}>

               {/*User info*/}
                <View style={{height:225,backgroundColor:primary,elevation:5}}>
                    <View>
                        <Image style={{width: 100, height: 100,marginTop:20,marginLeft:20,borderRadius:50}} source={{uri:'https://source.unsplash.com/1024x768/?boy'}}></Image>
                    </View>
                    <Text style={{color:'#fff',fontSize:20,margin:20}}>Name</Text>
                    <Text style={{color:'#fff',fontSize:15,marginLeft:20}}>example@gmail.com</Text>
                </View>
                
                {/*About us*/}
                <View style={{margin:10}} onStartShouldSetResponder={this._aboutShow}>
                    <Dcont name="group" value="About us" />
                </View>

                {/*Contact us*/}
                <View style={{margin:10}} onStartShouldSetResponder={this._contactShow}>
                    <Dcont name="phone" value="Contact Us" />
                </View>

                {/*Chatbot*/}
                <View style={{margin:10}} onStartShouldSetResponder={this._botShow}>
                    <Dcont name="question-answer" value="Mia"/>
                </View>

                {/*Logout*/}
                <View style={{marginTop:15,margin:10}} onStartShouldSetResponder={this._hide}>
                    <Dcont name="power-settings-new" value="Log out"/>
                </View>
           </View>
        
          <View style={{height:h,position:'absolute',width:s,marginLeft:m,backgroundColor:'#000',opacity:0.1}} onStartShouldSetResponder={this._hide}></View>           
        </View>
        </Modal>

        {/* About us */}
        <Modal visible={this.state.about} >
                <View style={{backgroundColor:'#fff',margin:20,height:h-80,elevation:20,borderRadius:9,width:w-40}}>
                    <Icon  
                    style={{margin:10,alignSelf:'flex-end', marginLeft:10}}
                    name='close'  
                    size={30}  
                    color='#616161'
                    onPress={this._aboutHide}
                />
                    <Aboutus/>
                </View>
        </Modal>

        {/*Chat bot*/}
        <Modal visible={this.state.bot}>
           <View style={{height:60,width:w,elevation:10,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between'}}>
             <Icon  
                    style={{margin:10,alignSelf:'flex-start', marginLeft:10}}
                    name='close'  
                    size={32}  
                    color={primary}
                    onPress={this._botHide}
                />
            <Text style={{margin:15,fontSize:24}}>Mia</Text>
           </View>
           <ChatBotHome/>
        </Modal>

        {/*Contact us */}
        <Modal visible={this.state.contact}>
           <View style={{height:60,width:w,elevation:10,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between'}}>
             <Icon  
                    style={{margin:10,alignSelf:'flex-start', marginLeft:10}}
                    name='close'  
                    size={32}  
                    color={primary}
                    onPress={this._contactHide}
                />
            <Text style={{margin:15,fontSize:24}}>Mia</Text>
           </View>
           <ContactUs/>
        </Modal>


    </View>)}
}
 

export default MainDrawer;

