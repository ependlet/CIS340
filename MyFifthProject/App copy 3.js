import React from 'react';
import {View } from 'react-native';

export default function App() {
  return (
    <View style = {{flex:1}}>
      <View style = {{flex:1, backgroungColor: 'red'}}>
        <View style = {{flex:2, backgroungColor: 'yellow'}}> 
        <View style = {{flex:3, height: 100, backgroungColor: 'blue'}}> 
        </View>
        </View>
      </View>
    </View>
   
  );
}
