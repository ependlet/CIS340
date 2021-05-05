import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';//import
import * as Sharing from 'expo-sharing';

export default function App() {

  const [selectedImage, setSelectedImage ] = React.useState(null)

  let openImagePickerAsync = async () => {
    let permissisonResult = await ImagePicker.requestCameraPermissionsAsync();
    if (PermissionRequest.granted == false) {
      alert("Permission is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled == true) {
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});
  };
  
  //add the sharing image dialog
  let openSharingDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('Sharing is not available on my phone');
      return;
    }

    Sharing.shareAsync(selectedImage.localUri);
  };

  //display the selected image
  if (selectedImage !== null) {
    return (
      <View style ={styles.container}>
        <Image source ={{uri: selectedImage.localUri}} style = {styles.sellImage}/>
        <TouchableOpacity onPress = {openSharingDialogAsync} style = {styles.button}>
          <Text style = {styles.buttonText}>Share My Photo</Text>
        </TouchableOpacity>
      </View>
    )
  }

  //end of code

  const [count, setCount] = useState(0)

  const onTap = () => setCount(count => count + 1);

  return (
    <View style={styles.container}>
     <Image source = {{uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png'}}
     style= {styles.logo}/>

     <Text style={styles.insts}>Press the Button Below to Select an Image on Your Phone!</Text>
      <TouchableOpacity style = {styles.button} onPress= {openImagePickerAsync}>
          <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#FFFFE0"
  },

  button: {
    backgroundColor: "#778899",
    padding: 20,
    borderRadius: 5
  },

  insts: {
    fontSize: 18,
    color: "#87CEFA", 
    marginHorizontal: 15,
    marginBottom: 10
  },

  logo: {
    width: 310,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
    fontSize: 20,
    color: "#FFF"
  },

  sellImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }

});
