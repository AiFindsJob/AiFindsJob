import React,{Component} from 'react';
import {Text,View,TextInput,TouchableOpacity,ScrollView,Dimensions} from  'react-native';
import primary from '../properties';

let w=Dimensions.get('window').width;
let h=Dimensions.get('window').height;
let m=w-30;
export default class ServiceCard extends React.Component {
    
    render(){
        return(<View>
            <View style={{width:m,margin:15,backgroundColor:'#fff',borderRadius:9,height:100,elevation:5}}>
                    <Text style={{fontSize:20,margin:10}}>Mock interview</Text>
                    <View style={{width:120,borderRadius:9,margin:10,backgroundColor:primary}}>
                        <Text style={{color:'#fff',textAlign:'center',fontSize:14,padding:5}}>Enroll now</Text>
                    </View>
            </View>
        </View>)
    }
}