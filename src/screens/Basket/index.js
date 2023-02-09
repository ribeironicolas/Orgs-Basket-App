import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MyText from '../../components/Text'
import Details from './components/Details'
import Header from './components/Header'
import Item from './components/Item'

const Basket = ({ header, details, items }) => {
  return <>
    <FlatList
      data={items.list}
      renderItem={Item}
      keyExtractor={({name}) => name}
      ListHeaderComponent={() => {
        return <>
          <Header {...header}/>
          <View style={styles.basket}>
            <Details {...details}/>
            <MyText style={styles.title}>{ items.title }</MyText>
          </View>
        </>
      }}
    />
  </>
}

const styles = StyleSheet.create({
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})

export default Basket