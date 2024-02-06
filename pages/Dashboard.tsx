import { FlatList, StyleSheet, Text, View } from "react-native";

import Card from "../components/card";
import useProductCalls from "../hooks/useProductCalls";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

export default function App() {
  const user = false
  const renderProducts = ({ item }) => <Card products={item} />;
  const keyExtractor = (item: any) => item.id.toString();
  const { data, getProducts } = useProductCalls();
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      getProducts();
    }, [])
  );

  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
      <Text style={styles.text}>Turkel's E-Commerce</Text>
      {!user&&<Text style={styles.text}>Login</Text>} 
      </View>
     
      <FlatList
        data={data}
        renderItem={renderProducts}
        style={styles.list}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textContainer:{
    flexDirection:"row",
    backgroundColor:"black",
    justifyContent:"space-between"

  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  list: {
    padding: 10,
    gap: 10,
  },
});
