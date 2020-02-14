import React, { Component } from 'react';
import { Text,Image, View, Modal,Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import primary from '../../properties';
import SentM from './sentM';
import ReciM from './reciM';
import { TextInput } from 'react-native-paper';

const w = Math.round(Dimensions.get('window').width);
const h = Math.round(Dimensions.get('window').height);

class ChatBotHome extends Component {
  render() {
    return (
      <View>
        <View style={{flex:0,flexDirection:'column',height:h-80,justifyContent:'space-between'}}>
           
           {/*Messages*/}
           <ScrollView style={{}}>

               {/*mess is props for message
                    <ReciM/> for responts
                    <SentM/> for query
               */}
                <ReciM mess='Hi,How can i help you'/>
           </ScrollView>

           {/*messageinputs*/}
           <View style={{height:70,backgroundColor:'#fff',flexDirection:'row',elevation:10}}>
                {/*Message input*/}
                <View style={{borderWidth:1,margin:10,backgroundColor:'#fff',borderColor:primary,padding:3,width:270,borderRadius:20}}>
                    <TextInput backgroundColor='#fff' placeholder="type message" style={{width:250,height:35,marginLeft:5,fontSize:20}}></TextInput>
                </View>

                {/*Message sent button*/}
                 <Icon  
                    style={{margin:15,alignSelf:'flex-end', marginLeft:10}}
                    name='send'  
                    size={36}  
                    color={primary}
                />
           </View> 
        </View>
      </View>          
    );
  }
}

export default ChatBotHome