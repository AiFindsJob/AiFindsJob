import React,{Component} from 'react';
import {Text,Image,View,TextInput,TouchableOpacity,ScrollView,Dimensions} from  'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import primary from '../properties';

let w=Dimensions.get('window').width;
let h=Dimensions.get('window').height;
let m=w-30;

class Details extends React.Component {
    render() {
        return (
        <View>
            <Text style={{textAlign:'justify',margin:10}}>
                {this.props.cont}
            </Text>
        </View>
        )
    }
}

class JobCard extends React.Component {
    constructor(props){
    super(props);
    this.state={
        expandCard:false,
      };
    };
    _expandCard=()=>{
        this.setState({expandCard:!this.state.expandCard})
    }
    render(){
        return(<View>
            <View style={{width:m,margin:5,marginTop:10,borderRadius:0,backgroundColor:'#fff',elevation:5}}>
                <View>
                    <Image
                        style={{height:120,width:m}}
                        source={this.props.img}  
                    />
                </View>
                <View style={{flexDirection:this.state.expandCard?'column':'row',justifyContent:'space-between'}}>
                    <Text style={{marginTop:5,marginLeft:10,fontSize:19,color:primary}}>{this.props.cname}</Text>
                    {this.state.expandCard?<Details cont={this.props.cont}/>:<View/>}
                    <Icon  
                        style={{alignSelf:'flex-end'}}
                        name={this.state.expandCard?'expand-less':'expand-more'}  
                        size={32}  
                        color={primary}
                        onPress={this._expandCard}
                    />
                </View>
            </View>
        </View>)
    }
}

export default JobCard