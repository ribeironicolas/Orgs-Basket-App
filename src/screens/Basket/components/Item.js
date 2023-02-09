import React from 'react'
import { Image, StyleSheet, View, FlatList } from 'react-native'
import MyText from '../../../components/Text'

const Item = ({ item: {name, image}}) => {
  return <View style={styles.item}>
    <Image source={image} style={styles.image}/>
    <MyText style={styles.name}>{ name }</MyText>
  </View>
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center',
    paddingHorizontal: 16
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646'
  }
})

export default Item