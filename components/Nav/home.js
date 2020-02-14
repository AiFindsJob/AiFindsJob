import React from 'react';
import {Image,Text,View,TouchableOpacity,ScrollView,Dimensions} from  'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { } from 'react-native-paper';
import JobCard from '../homePro/jobCard'

import primary from '../properties'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/1.jpg'),
        require('../../assets/2.jpg'),
        require('../../assets/3.jpg'),
        
      ],
      ccom:[{
        cname:'facebook',
        img:require('../../assets/fbs.jpg'),
        cont:'Facebook, Inc. is an American social media and technology company based in Menlo Park, California. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo'
      },{
        cname:'Google',
        img:require('../../assets/googl.jpg'),
        cont:'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook.'
      },
      {
        cname:'Amazon',
        img:require('../../assets/amazon.jpg'),
        cont:'Amazon.com, Inc., is an American multinational technology company based in Seattle that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is considered one of the Big Four tech companies, along with Google, Apple, and Facebook'
      },{
        cname:'Microsoft',
        img:require('../../assets/micro.jpg'),
        cont:'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.'
      }],
      ccun:[{
        cname:'Aspiring minds',
        img:require('../../assets/aspirin.jpg'),
        cont:'Aspiring Minds is a global job skills credentialing leader set up with a vision to create a merit driven talent ecosystem and enable efficient job skills matching by crafting credible and intelligent assessments.',
      }],
      tabC:true,
    };
  }
  _tcons=()=>{
        this.setState({tabC:false})
      }

      _tcomp=()=>{
        
         this.setState({tabC:true})
      }
  render() {
      let w=Dimensions.get('window').width;
      let h=Dimensions.get('window').height;
      let m=(w-19)/2

      

    return (
      <View style={{backgroundColor:'#fff'}}>
        <ScrollView style={{}}>
        
        {/*Slider*/}
        <View style={{width:w,height:180,backgroundColor:'#fff',margin:0}}>
          <SliderBox circleLoop={true} ImageComponentStyle={{marginLeft:0, width: w, marginTop: 5}} images={this.state.images} autoplay paginationBoxVerticalPadding={5}  resizeMethod={'resize'}
  resizeMode={'cover'}
 />
        </View>

        {/*Banner*/}
        <View style={{}}>
          <Image style={{width:w,height:140,borderRadius:0,marginTop:5}} source={require('./../../assets/banner.jpeg')}/>
        </View>
        
        {/*Home page tabs*/}
        <View style={{width:w-20,margin:10,elevation:5,backgroundColor:'#fff',borderRadius:9}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',elevation:5,borderRadius:0,backgroundColor:'#fff',borderTopLeftRadius: 9,borderTopRightRadius: 9}}>
            <TouchableOpacity onPress={this._tcomp} style={{width:m,backgroundColor:this.state.tabC?primary:'#fff',borderTopLeftRadius: 9,padding:15,borderWidth:1,borderColor:primary,alignItems:'center'}}>
              <Text style={{color:this.state.tabC?'#fff':primary}}>Top Companies</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._tcons} style={{width:m,backgroundColor:this.state.tabC?'#fff':primary,borderTopRightRadius: 9,padding:15,alignItems:'center',borderColor:primary,borderWidth:1}}>
              <Text style={{color:this.state.tabC?primary:'#fff'}}>Top Cunsultancy</Text>
            </TouchableOpacity>
          </View>

          {/*Top companies*/}
          <View style={{backgroundColor:'#fff',height:'auto'}} >
            
            {this.state.tabC?this.state.ccom.map((data, index) => (
               <JobCard cname={data.cname} img={data.img} cont={data.cont}/> 
            )):this.state.ccun.map((data, index) => (
               <JobCard cname={data.cname} img={data.img} cont={data.cont}/> 
            ))}
          </View>
        </View>        
        </ScrollView>
      </View>
    );
  }
}

export default Home;