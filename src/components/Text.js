import React from 'react'
import { StyleSheet, Text } from 'react-native'

const MyText = ({ children, style }) => {
  let weight = styles.text

  if(style?.fontWeight === 'bold') {
    weight = styles.textBold
  }

  return <Text style={[style, weight]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal'
  },
  textBold: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal'
  }
})

export default MyText