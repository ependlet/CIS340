import React from 'react';
import {Text, Image, View } from 'react-native';

export default function DogApp() {
  let pic = {uri: "https://worlddogfinder.com/upload/editor/brittany_spaniel_puppies_LhEYdHYrX5.jpg"}
  return (
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source = {pic}
      style = {{width: 200, height: 200}}
      />
      <Text> Hello, I am your dog!</Text>
    </View>
  );
}

