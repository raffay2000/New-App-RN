import React from 'react'
import { View,Text ,StyleSheet,TouchableOpacity} from 'react-native'

export const Button = ({color,style,textColor,text,onPress,fontWeight,textSize,textalign}) => {
  return (
    <> 
    <TouchableOpacity style={[styles.btn,{backgroundColor:color},style]} onPress={onPress}>
        <Text style={{color:textColor,fontSize:textSize,fontWeight:fontWeight }}>{text}</Text>
    </TouchableOpacity>
    
    </>
  )
}

const styles=StyleSheet.create({
    btn:{
        width: '80%',
        height:'7%',
        backgroundColor:"#C63520",
        justifyContent:"center",
    alignItems:"center",
    borderRadius:12

    

    }
});
