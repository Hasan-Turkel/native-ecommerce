import React from 'react'
import { Alert, Button, Image, Text, View } from 'react-native'
import styles from './Card.style';
import { useSelector } from 'react-redux';
import useProductCalls from '../../../hooks/useProductCalls';
import { useNavigation } from '@react-navigation/native'; 

interface CardProps {
  products: {
    price: number;
    title: string;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({products}) => {
  const { updateBasket } = useProductCalls();
  const navigation:any = useNavigation()

   const { user } = useSelector((state:any) => state.auth)
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
              onPress={() => {updateBasket({ process: "add", item:products });
            }}
            />
          )}
        </View>
    </View>
  )
}

export default Card