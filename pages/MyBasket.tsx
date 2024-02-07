import { Button, FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

import BasketCard from "../components/store/basketCard";
import useProductCalls from "../hooks/useProductCalls";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useSelector } from "react-redux";


export default function MyBasket({ navigation }) {
  const { updateBasket } = useProductCalls();
  const { user } = useSelector((state: any) => state.auth);
  const renderProducts = ({ item }) => <BasketCard products={item} handleBasket={handleBasket}/>;
  const keyExtractor = (item: any) => item.id.toString();
  const { data, getBox } = useProductCalls();
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      getBox();
    }, [])
  );

  const totalAmount = data?.reduce(
    (sum, { price, piece }) => sum + price * piece,
    0
  );

  const handleBasket = (process: string, item: any) => {
    updateBasket({ process: process, item });
    setTimeout(() => {
      getBox();
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <StatusBar />

      <Text style={styles.text}>Hi {user.username} here is your basket.</Text>

      <FlatList
        data={data.reverse()}
        renderItem={renderProducts}
        style={styles.list}
        keyExtractor={keyExtractor}
        ListFooterComponent={() =>  <View style={styles.buyContainer}>
        <Text style={styles.total}> Total Amount: {totalAmount.toFixed(2)}</Text>
        <Text style={styles.buyButton} onPress={() => {
                handleBasket("buy", {});
                navigation.navigate("MyPurchases");
              }}>BUY</Text>
        
      </View>}
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
  buyContainer:{
   borderWidth:0.2,
   width:250,
   borderRadius:10,
   padding:10,
   alignSelf:"center",
   margin:20,
   gap:10,
  },
  total:{
    fontSize: 20,
    textAlign:"center"
  },
  buyButton:{
    textAlign:"center",
    fontSize: 20,
    backgroundColor:"#f1bc1b",
    width:100,
    padding:5,
    borderRadius:10,
    alignSelf:"center",

  }
});
