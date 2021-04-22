import React from 'react';
import {Text, Image, ScrollView } from 'react-native';

const dog = {
  uri: '"https://worlddogfinder.com/upload/editor/brittany_spaniel_puppies_LhEYdHYrX5.jpg' ,
 width: 64, 
 height: 64
  };

export default  MyScrollViewApp = () => (

  <ScrollView style = {{padding: 40}}>
    <Text style={{fontsize: 80}}> Try to Scroll Down </Text>
    <Image source={require('./assets/dog2.png') } style = {{width: 64, height: 64}} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />  
    <Image source={dog} />
    <Image source={dog} />
    <Text style={{fontsize: 80}}> Try to Scroll Down Again if You Like </Text>
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />  
    <Image source={dog} />
    <Image source={dog} />
    <Text style={{fontsize: 80}}> Try to Scroll Down Again  </Text>
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />  
    <Image source={dog} />
    <Image source={dog} />
    <Text style={{fontsize: 80}}> Try to Scroll Down Again </Text>
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />
    <Image source={dog} />  
    <Image source={dog} />
    <Image source={dog} />
    <Text style={{fontsize: 80}}> React Native Component! </Text>
  </ScrollView>  
  );
  

