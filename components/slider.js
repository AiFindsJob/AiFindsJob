import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,TouchableOpacity,
} from 'react-native';
import ImageSlider from 'react-native-image-slider';

const Slide= () => {
    const images = [
      '../assets/img1.jpg',
      '../assets/img2.jpg',
    ];
 
    return (
      <SafeAreaView >

        <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          images={images}
          customSlide={({ index, item, style, width }) => (
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
        />
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
      customSlide:{
          height:100,
          width:100,
      }
  });
export default Slide;