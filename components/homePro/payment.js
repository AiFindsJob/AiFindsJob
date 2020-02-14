import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Image, View, Modal, Dimensions,StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';
import primary from '../properties';
import { ScrollView } from 'react-native-gesture-handler';

const w = Math.round(Dimensions.get('window').width);
const h = Math.round(Dimensions.get('window').height);
let data = [{value: '2020',},
{value: '2021',},
{value: '2022',},
{value: '2023',},
{value: '2024',},
{value: '2025',},
{value: '2026',},
{value: '2027',},
{value: '2028',},
{value: '2029',},];

let month = [{value: 'Jan',},
{value: 'Feb',},
{value: 'Mar',},
{value: 'Apr',},
{value: 'May',},
{value: 'Jun',},
{value: 'Jul',},
{value: 'Aug',},
{value: 'Sep',},
{value: 'Oct',},
{value: 'Nov',},
{value: 'Dec',},
];

let banks = [];

class Exp extends Component {
    render(){
        return(<View>
            <View style={{marginLeft:20,marginRight:20}}>
                <TextField placeholder="Card holder name" ></TextField>
            </View>
            <View style={{marginLeft:20,marginRight:20}}>
                <TextField placeholder="Card number" ></TextField>
            </View>
            <View style={{width:300,flexDirection:'row',alignSelf:'center',justifyContent:'space-between'}}>
            <View style={{width:110,marginLeft:20}}>
            <Dropdown
                label='Expiry yyyy'
                data={data}
            />
            </View>

            <View style={{width:110,marginRight:20}}>
            <Dropdown
                label='Expiry mm'
                data={month}
            /></View>
        </View></View>);
    }
}

class Bank extends Component{
    render() {
        return (
            <View style={{margin:20,width:250,alignSelf:'center'}}>
                <Dropdown
                    label='Select your bank'
                    data={banks}
                />
            </View>
        )
    }
}

class Wallet extends Component{
    
    render() {
        const pay=new Payment()
        return (
            <View>
                <View style={{flexDirection:'row',margin:20}}>
                    <Icon  
                        style={{margin:5,alignSelf:'flex-end'}}
                        name='radio-button-checked'  
                        size={20}  
                        color='#000'
                    />
                    <Text style={{marginLeft:30,position:'absolute',fontSize:20}}>Paytm wallet</Text>
                </View>
            </View>
        )
    }
}
class Payment extends Component {

    

  constructor(props){
    super(props);
    this.state={
        expandCard:false,
        expandInt:false,
        expandUpi:false,
  };
};

    _expandCard=()=>{
        this.setState({expandCard:!this.state.expandCard})
        this.setState({expandInt:false})
        this.setState({expandUpi:false})
    }
    _expandInt=()=>{
        this.setState({expandInt:!this.state.expandInt})
        this.setState({expandCard:false})
        this.setState({expandUpi:false})
           
    }
    _expandUpi=()=>{
        this.setState({expandUpi:!this.state.expandUpi})
        this.setState({expandCard:false})
        this.setState({expandInt:false})
    }


    render() {
        return ( <View>
            <View style={{height:60,elevation:5,backgroundColor:'#fff'}}>
                 <Text style={{margin:10,fontSize:21}}>Payment</Text>
            </View>
            <ScrollView>
           
            <View style={{alignItems:'center'}}>
                <View style={styles.container}>
                    <Text style={styles.font}>Add Debit/Credit</Text>
                    <View style={{height:this.state.expandCard?200:0}}>
                         {this.state.expandCard?<Exp/>:<View/>}
                    </View>
                    <Icon  
                        style={{alignSelf:'flex-end'}}
                        name={this.state.expandCard?'expand-less':'expand-more'}  
                        size={32}  
                        color='#000'
                        onPress={this._expandCard}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.font}>Internet Banking</Text>
                    <View style={{height:this.state.expandInt?110:0}}>
                          {this.state.expandInt?<Bank/>:<View/>}
                    </View>
                    <Icon  
                        style={{alignSelf:'flex-end'}}
                        name={this.state.expandInt?'expand-less':'expand-more'}  
                        size={32}  
                        color='#000'
                        onPress={this._expandInt}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.font}>BHIM UPI/Wallet</Text>
                    <View style={{height:this.state.expandUpi?120:0}}>
                        {this.state.expandUpi?<Wallet/>:<View/>}
                    </View>
                    <Icon  
                        style={{alignSelf:'flex-end'}}
                        name={this.state.expandInt?'expand-less':'expand-more'}  
                        size={32}  
                        color='#000'
                        onPress={this._expandUpi}
                    />
                </View>
            </View>
            <View style={{width:w-40,backgroundColor:primary,height:60,borderRadius:9,alignSelf:'center',marginTop:50}}>
                <Text style={{alignSelf:'center',fontSize:23,margin:14,color:'#fff'}}>Continue</Text>
            </View>
            </ScrollView>
        </View>          
        );
    }
}

const styles = StyleSheet.create({
  container: {
        width:w-40,
        margin:20,
        borderRadius:9,
        marginBottom:0,
        elevation:10,
        backgroundColor:'#fff',
        padding:10
    },
    font:{
        fontSize:20,
        color:'#000000cc',
    }
});

export default Payment