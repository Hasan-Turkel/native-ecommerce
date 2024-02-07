import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

import BasketCard from "../components/store/basketCard";
import useProductCalls from "../hooks/useProductCalls";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useSelector } from "react-redux";

export default function MyBasket({ navigation }) {
  const { user } = useSelector((state: any) => state.auth);
  const renderProducts = ({ item }) => <BasketCard products={item} />;
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
      <StatusBar />

      <Text style={styles.text}>Hi {user.username} here is your basket.</Text>

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
