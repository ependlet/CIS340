import React from 'react';
import {View } from 'react-native';

export default function App() {
  return (
    <View style = {{flex:1, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'}}>
      <View style = {{width: 50, height: 50, backgroungColor: 'red'}}>
        <View style = {{width: 50, height: 50, backgroungColor: 'yellow'}}> 
        <View style = {{width: 50, height: 50, height: 100, backgroungColor: 'green'}}> 
        </View>
        </View>
      </View>
    </View>
   
  );
}
