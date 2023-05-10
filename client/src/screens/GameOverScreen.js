import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import Colors from '../../constants/colors'
import PrimaryButton from '../components/PrimaryButton'

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
          <Title>GAME OVER ✌</Title>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/images/success.png')}/>
          </View>
          <Text style={styles.summaryText}>
              𝗬𝗼𝘂𝗿 𝗽𝗵𝗼𝗻𝗲 📱 𝗻𝗲𝗲𝗱𝗲𝗱 <Text style={styles.highlight}> {roundsNumber} </Text> 𝗿𝗼𝘂𝗻𝗱𝘀 𝘁𝗼 𝗴𝘂𝗲𝘀𝘀 𝘁𝗵𝗲 𝗻𝘂𝗺𝗯𝗲𝗿 {''}
              <Text style={styles.highlight}> {userNumber} </Text>
          </Text>
          <PrimaryButton onPress={onStartNewGame}>Start New Game 🙃</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        color: Colors.accent500,
    }
})