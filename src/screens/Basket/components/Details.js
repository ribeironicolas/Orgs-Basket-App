import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import MyText from '../../../components/Text'

const Details = ({ name, logoFarm, farmName, description, price, button}) => {
  return <>
      <MyText style={styles.name}>{name}</MyText>
      <View style={styles.farm}>
        <Image style={styles.imageFarm} source={logoFarm}/>
        <MyText style={styles.farmName}>{farmName}</MyText>
      </View>
      <MyText style={styles.description}>{description}</MyText>
      <MyText style={styles.price}>{price}</MyText>

      <TouchableOpacity style={styles.button}>
        <MyText style={styles.textButton}>{button}</MyText>
      </TouchableOpacity>
  </>
}

const styles = StyleSheet.create({
  name: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold'
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12
  },
  imageFarm: {
    height: 32,
    width: 32,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#2a9f85',
    borderRadius: 6,
    marginTop: 16,
    paddingVertical: 16,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 26,
    textAlign: 'center',
  }
})

export default Details