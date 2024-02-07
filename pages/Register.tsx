import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RegisterForm from "../components/auth/registerForm";

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
        
      <RegisterForm />
      <Text style={styles.text}>Do you have an account? <Text style={styles.inlineText} onPress={()=>navigation.navigate("Login")}>Login</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:"white"
  },
  text:{
    alignSelf:"center",
    margin:10,
    fontSize:20,
  },
  inlineText:{
    color:"red"
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Register