import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({children}) => {
  return (
      <Text style={styles.title}>{children}</Text>

    
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
         fontFamily: 'open-sans-bold',
        fontSize: 24,
        textAlign: 'center',
        margin: 16,
        color: 'black',
        borderWidth: 2,
        borderColor: 'black',
        padding: 12
    }
})