import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Card = ({children}) => {
  return (
      <View style={styles.card}>
          {children}
     </View>
  )
}

export default Card

const styles = StyleSheet.create({
     card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        marginTop: 36,
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
})