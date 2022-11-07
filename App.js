import { Button, StyleSheet, Text, View,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import ImagePicker from 'react-native-image-crop-picker';



navigator.geolocation = require('@react-native-community/geolocation');
const App = () => {
  const [img,setImg]=useState()
  const Handle=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {

      setImg(image)
    });
    
  }
  const cam=async()=>{
 const img=  await ImagePicker.openPicker({
      multiple: true
    })
    console.log(img,'21')
  }






  return (
    <View>
    { img &&
      <Image source={{uri:img.path}} style={styles.img}/>
    }
     
     <View style={styles.oneImage}>
     <Button title='take one Image' onPress={()=>{Handle()}}/>
     </View>
      <View>



</View>
     
      


      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  oneImage:{
    marginVertical:20,
    width:200,
    height:35,
    marginHorizontal:100
  },img:{width:200,
    height:200,
    borderRadius:50,
    marginVertical:10,
    marginHorizontal:100}
})