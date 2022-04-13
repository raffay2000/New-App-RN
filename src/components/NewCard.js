import { StyleSheet, Text, View ,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const NewCard = ({source,title,desc,publishedAt,imageUrl,style}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity >
      <Image source={{uri:imageUrl,width:"100%",height:200, }} style={{borderRadius:10}}/>
      </TouchableOpacity>
          <Text style={styles.titleStyle} >
            {title}
          </Text>
          <Text style={styles.descStyle}>
            {desc}
          </Text>
          <Text style={styles.sourceStyle}>
            {source}
          </Text>
          <Text style={styles.dateStyle}>
            {publishedAt}
          </Text>
    </View>
  )
}

export default NewCard

const styles = StyleSheet.create({
    container:{
      // flex:1,
      // flexShrink:5,
      // flexWrap:'wrap',

        width:300,
        // height:540,
        backgroundColor:'#DEE2E6',
        borderWidth:1,
        borderColor:"grey",
        borderRadius:10,
        padding:5,
        margin:5,
        marginBottom:'28%'
        // alignItems:'center'
        // flexWrap:'nowrap'
    },
    titleStyle:{
        fontSize:28,
        fontWeight:'700',
        textAlign:'center',
        // width:'20%'
    },
    descStyle:{
        // width:'20%',
        textAlign:'center',
        fontSize:17,
    },
    sourceStyle:{
        // width:"10%",
        fontSize:25,
        alignSelf:'center'
    },
    dateStyle:{
      alignSelf:'center'
      // width:"10%"
    }
    
})