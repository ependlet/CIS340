import React from 'react';
import {View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style = {{width: 50, height: 50, backgroungColor: 'red'}}>
        <View style = {{width: 100, height: 100, backgroungColor: 'yellow'}}> 
        <View style = {{width: 100, height: 100, backgroungColor: 'blue'}}> 
        </View>
        </View>
      </View>
    </View>
   
  );
}
