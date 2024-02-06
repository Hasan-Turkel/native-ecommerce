import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import styles from './Card.style';

interface CardProps {
  products: {
    price: number;
    title: string;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({products}) => {

  const user = true

    // console.log(products);
  return (
    <View style={styles.container}>
    <Image style={styles.img} source={{uri: products.image}} />
    <Text style={styles.price}>{products.price}</Text>
    <Text style={styles.title}>{products.title.slice(0, 30)}...</Text>
    <View style={styles.buttonContainer}>
          {user && (
            <Button
              title="Add to Basket"
              onPress={null}
            />
          )}
        </View>
    </View>
  )
}

export default Card