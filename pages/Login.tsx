import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import LoginForm from "../components/auth/loginForm";

const Login = ({ navigation }) => {
  // console.log(navigation);
  return (
    <View style={styles.container}>
        <LoginForm />
        <Text style={styles.text}>
          Don't you have an account?{" "}
          <Text
            style={styles.inlineText}
            onPress={() => navigation.navigate("Register")}
          >
           Register
          </Text>
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:"white"
  },
  text: {
    alignSelf: "center",
    margin: 10,
    fontSize: 20,
  },
  inlineText: {
    color: "red",
  },
});

export default Login