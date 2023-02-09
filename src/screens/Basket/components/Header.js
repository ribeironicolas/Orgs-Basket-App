import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import MyText from '../../../components/Text'

import header from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width

const Header = ({ title }) => {
  return <>
    <Image source={header} style={styles.header} />
    <MyText style={styles.title}>{title}</MyText>
  </>
}

const styles = StyleSheet.create({
  header: {
    height: 578 / 768 * width,
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 26, 
    padding: 16,
    position: 'absolute',
    textAlign: 'center',
    width: '100%', 
  },
})

export default Header