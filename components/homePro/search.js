/*Search option in header*/

import React,{Component} from 'react';
import {Text,View,TextInput,TouchableOpacity,ScrollView,Dimensions} from  'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import primary from '../properties'
let w=Dimensions.get('window').width;
let h=Dimensions.get('window').height;
let m=w-30;
export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={show:false};
        };
        _show=()=>{
            this.setState({show:!this.state.show})
        }
    render(){
        return(<View>
            <View style={{margin:5,marginRight:10,backgroundColor:'#fff',flexDirection:'row',height:40}}>
                <TextInput style={{fontSize:16,width:this.state.show?250:0,borderBottomWidth:this.state.show?1:0,borderBottomColor:primary}} placeholder="Search"/>
                <Icon
                    name='search'
                    size={30}
                    style={{marginTop:5, color:primary,borderBottomColor:primary,borderBottomWidth:this.state.show?1:0}}
                    onPress={this._show}
                />
            </View>
        </View>)
    }
}