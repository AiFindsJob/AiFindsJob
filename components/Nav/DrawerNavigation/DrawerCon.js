/*Contents inside drawable nav*/
import React,{Component} from 'react';
import {Text,View,TouchableOpacity} from  'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  
class Dcont extends React.Component {
    render() {
    return (
      <View style={{flexDirection:'row',margin:1,backgroundColor:'#fff'}}>
        <Icon  
            style={{margin:10, marginLeft:10}}
            name={this.props.name}  
            size={30}  
            color='#616161'
        />
    <Text style={{margin:10,color:'#616161',fontSize:20}}>{this.props.value}</Text>
      </View>
    );
  }
}
export default Dcont;