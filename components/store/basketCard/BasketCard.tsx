import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./BasketCard.style";
import { Entypo } from "@expo/vector-icons";

interface BasketCardProps {
  products: {
    price: number;
    title: string;
    image: string;
    piece: number;
  };
  handleBasket: (process: string, item: any) => void;
}
const BasketCard: React.FC<BasketCardProps> = ({ products, handleBasket }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: products.image }} />
      <Text style={styles.delete}  onPress={() => handleBasket("delete", products)}>X</Text>
      <Text style={styles.text}>{products.title}</Text>
      <Text style={styles.text}>{products.price} $</Text>
      <View style={styles.pieceContainer}>
        <Text style={styles.minus}>
          <Entypo
            name="minus"
            size={24}
            color="black"
            onPress={() =>
              handleBasket(products.piece > 1 ? "remove" : "delete", products)
            }
          />
        </Text>
        <Text style={styles.piece}>{products.piece}</Text>
        <Text style={styles.plus}>
          <Entypo
            name="plus"
            size={24}
            color="black"
            onPress={() => handleBasket("add", products)}
          />
        </Text>
      </View>
    </View>
  );
};

export default BasketCard;
