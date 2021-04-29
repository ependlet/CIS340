import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Colorado_State_Rams_wordmark.svg/1024px-Colorado_State_Rams_wordmark.svg.png",
  };
  return (
    <View style={styles.container}>
     <Image
       style = {styles.localCSULogo}
       source = {require('./assets/logo.png')}
     />
     <Image
       style = {styles.urlCSULogo}
       source = {{
         uri: "https://exstreamist.com/wp-content/uploads/2017/11/Watch-Colorado-State-Rams-Online.png"
       }}
     />
    <Image 
    styles = {styles.stretchLogo}
    source = {csuLogo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  localCSULogo: {
    width: 55,
    height: 65
  },
  urlCSULogo: {
    width: 50,
    height: 50
  },
  stretchLogo: {
    height: 200,
    resizeMode: 'center'
  }
});
