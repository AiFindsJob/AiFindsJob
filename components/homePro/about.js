import React, { Component } from 'react';
import { Text, Image, View, Modal, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import primary from '../properties';
import Icon from 'react-native-vector-icons/MaterialIcons';

const w = Math.round(Dimensions.get('window').width);
const h = Math.round(Dimensions.get('window').height);

class Aboutus extends Component {
    render() {
        return ( <View>
            <Text style = {
                { textAlign: 'center', margin: 25, fontSize: 26, fontWeight: 'bold' } } > About Us </Text> 
           <View>
            <Image style = {
                { width: 150, alignSelf: 'center', height: 150, margin: 10, borderRadius: 75 } }
            source = {
                { uri: 'https://source.unsplash.com/1024x768/?computer' } } > </Image>
                </View> 
                <Text style = {
                { margin: 10, textAlign: 'center' } } >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </Text>
            <View style = {
                { margin: 20, backgroundColor: primary, borderRadius: 25, alignSelf: 'center', height: 50, width: 200 } } >
            <Text style = {
                { color: '#fff', fontSize: 24, margin: 5, textAlign: 'center' } } > Know more </Text> 
                </View> 
        </View>          
        );
    }
}

export default Aboutus