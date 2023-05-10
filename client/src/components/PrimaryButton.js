import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const PrimaryButton = ({ children, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress}> 
            <View style={styles.container}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
      </TouchableOpacity>
    
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary500,
        borderColor: 'black',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'

    }
})