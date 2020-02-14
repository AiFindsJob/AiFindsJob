import React, { Component } from 'react';
import { Text, Image, View, Modal, Dimensions,StyleSheet } from 'react-native';
import MapView,{ Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import primary from '../properties';

const w = Math.round(Dimensions.get('window').width);
const h = Math.round(Dimensions.get('window').height);

class ContactUs extends Component {
    render() {
        return ( <View> 
            <View style={{height:h/4,width:w,position:'absolute',elevation:20}}>
                <Image
                    style={{width:w, height: h/4,position:'absolute',borderBottomLeftRadius:25,borderBottomRightRadius:25}}
                    source={require('../../assets/bkg.jpg')}
                ></Image>
                
                <Icon style={{ position:'absolute',marginTop:8,marginLeft:10,marginRight:10,elevation:30}}  
                    name="navigate-before"  
                    size={40}  
                    color='#fff'/> 
                <Text style={{fontSize:22,color:'#fff',textAlign:'center',marginTop:20}}>
                    CONTACT US
                </Text>
                <View style={{margin:20}}>
                <View style={{flexDirection:'row'}}>
                  <Icon style={{ marginTop:4,marginLeft:10,marginRight:10,elevation:30}}  
                      
                    name="email"  
                    size={20}  
                    color='#fff'/> 
                  <Text style={{fontSize:18,color:'#fff'}}>aifindsjob@gmail.com</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                  <Icon style={{ marginTop:4,marginLeft:10,marginRight:10,elevation:30}}  
                    name="phone"  
                    size={20}  
                    color='#fff'/> 
                  <Text style={{color:'#fff',fontSize:18}}>+91 98363562725</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:10}}>
                  <Icon style={{ marginTop:4,marginLeft:10,marginRight:10,elevation:30}}
                    name="location-on"  
                    size={20}  
                    color='#fff'/> 
                  <Text style={{fontSize:18,color:'#fff'}}>Kerala , India</Text>
                </View>
                </View>
            </View>
            <MapView
                    style={ styles.map }
                initialRegion={{
                latitude: 10.523226,
                longitude: 76.520407,
                latitudeDelta: 2,
                longitudeDelta: 2,
                }}>
    <Marker
      coordinate={{latitude: 10.523226,
                longitude: 76.520407}}
    />
    </MapView>
        </View>        
        );
    }
}
const styles = StyleSheet.create({
  fadeIn:{
    width:250,
    height:50,
    backgroundColor:'#bdc3c7',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    marginTop:h/3.9,
    height:300,
    width:w,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default ContactUs