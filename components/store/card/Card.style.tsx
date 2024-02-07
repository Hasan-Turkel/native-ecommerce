import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({

    container: {
        borderRadius: 10,
        flex:1,
        margin:3,
        padding:10,
        borderWidth:0.1,
        gap:5
      },
      price:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
      },
      title:{
        textAlign:"center"
      },
      img:{
        height:200,
        borderRadius:10,
        objectFit:"contain",
      },
      
        buttonContainer: {
          width: 200,
          alignSelf: "center",
        },
  
  });