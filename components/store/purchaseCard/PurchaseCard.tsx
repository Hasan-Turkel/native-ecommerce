import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './PurchaseCard.style'

interface PurchaseCardProps {
  products: {
    price: number;
    title: string;
    image: string;
    piece: number;
    date:any
  };
}
const PurchaseCard:React.FC<PurchaseCardProps> = ({products}) => {
  return (
   <View style={styles.container}>
<Image style={styles.img} source={{uri: products.image}} />
    <Text style={styles.text}>{products.title}</Text>
    <Text style={styles.text}>{products.price}</Text>
    <Text style={styles.text}>{products.piece} Piece</Text>
    <Text style={styles.text}>Purchase Date : {products.date.slice(0, 10)}</Text>
   </View>
  )
}

export default PurchaseCard