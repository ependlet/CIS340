import React from 'react';
import {Text, View, FlatView, FlatList } from 'react-native';



export default  StatesApp = () => {

return (
  <View style = {{flex:1, paddingTop:22 }}>
    <FlatList 
    data = {[
      {key: 'Alabama'},
      {key: 'Alaska'},
      {key: 'Arkansas'},
      {key: 'Arizona'},
      {key: 'California'},
      {key: 'Colorado'},
      {key: 'Delaware'},
      {key: 'Florida'},
      {key: 'Hawaii'},
      {key: 'Maine'},
      {key: 'Nevada'},
      {key: 'Louisiana'},
      {key: 'Georgia'},
      {key: 'New Mexico'},
      {key: 'Texas'},
      {key: 'North Dakota'},
      {key: 'South Dakota'},
      {key: 'Oklahoma'},
      {key: 'New York'},
      {key: 'New Hampshire'},
      {key: 'North Carolina'},
      {key: "South Carolina"},
      {key: 'New Jersey'},
      {key: 'Wyoming'},
      {key: 'Tennessee'},
      {key: 'Minnesota'},
      {key: 'Michigan'},
      {key: 'Idaho'},
      {key: 'Iowa'},
      {key: 'Wisconsin'},
      {key: 'Washington'},
      {key: 'Montana'},
      {key: 'Virginia'},
      {key: 'Kentucky'}


    ]} 
    renderItem= {({item}) => <Text style = {{padding: 10, fontsize: 20, height: 44}}> {item.key} </Text>}
    />
  </View>

 
 
  );
  
}
