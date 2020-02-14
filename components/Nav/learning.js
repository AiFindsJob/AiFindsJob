import React,{Component} from 'react';
import {Text,View,TouchableOpacity} from  'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ElearningCard from '../homePro/elearning';

class ELearning extends React.Component {
    render() {
    return (
      <View style={{backgroundColor:'#fff',height:'100%'}}>
        <ScrollView>
          <ElearningCard/>
        </ScrollView>
      </View>
    );
  }
}
export default ELearning;