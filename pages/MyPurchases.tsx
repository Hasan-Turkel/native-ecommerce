import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

import PurchaseCard from "../components/store/purchaseCard";
import useProductCalls from "../hooks/useProductCalls";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useSelector } from "react-redux";

export default function MyPurchases({navigation}) {
  
  const { user } = useSelector((state:any) => state.auth)
  const renderProducts = ({ item }) => <PurchaseCard products={item} />;
  const keyExtractor = (item: any) => item.id.toString();
  const { data, getPurchases } = useProductCalls();
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      getPurchases();
    }, [])
  );

  return (
    <View style={styles.container}>
      <StatusBar/>

     
      <Text style={styles.text}>Hi {user.username} here is your purchases.</Text>
  
     
      <FlatList
        data={data.reverse()}
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  list: {
    padding: 10,
    gap: 10,
  },
});
