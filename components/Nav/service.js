import React,{Component} from 'react';
import {Text,View} from  'react-native';
import ServiceCard from '../servicePro/serviceCard';

class Service extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'#fff',height:'100%'}}>
        <ServiceCard/>
      </View>
    );
  }
}
export default Service;