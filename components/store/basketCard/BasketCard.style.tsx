import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        flex:1,
        margin:3,
        padding:20,
        borderWidth:0.1,
        gap:10,
        position:"relative"
      },
      pieceContainer:{
        flexDirection:"row",
        width:100,
        justifyContent:"space-between",
        
      },
      text:{
        fontSize:20,
      },
      img:{
        height:100,
        borderRadius:10,
        objectFit:"contain",
      },
      minus:{
        backgroundColor:"lightgrey",
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        padding:4,
        textAlignVertical:"center"
      },
      plus:{
        backgroundColor:"lightgrey",
        borderTopRightRadius:50,
        borderBottomRightRadius:50,
        padding:4,
        textAlignVertical:"center"
      },
      piece:{
        fontSize:30,
        textAlignVertical:"center",
        padding:4,
        paddingHorizontal:20,
        borderWidth:0.2,
      },
      delete:{
        position:"absolute",
        top:20,
        end:20,
        fontSize:30,
        color:"red",
        fontWeight:"bold"

      }


})

export default styles