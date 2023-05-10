import { StyleSheet, Alert, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import PrimaryButton from '../components/PrimaryButton'
import Colors from '../../constants/colors'
import Title from '../components/Title'
import Card from '../components/Card'
import InstructionText from '../components/InstructionText'

const StartGameScreen = ({onPickNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function reseInputHandler() {
        setEnteredNumber('');
    }

    function resetHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Error 👎', 'Please enter a number between 𝟭 & 𝟵𝟵 only 🙃', [{
                text: 'Okay 👍', style: 'destructive', onPress: reseInputHandler}]);
            return;
        }
        onPickNumber(chosenNumber);
    }

  return (
      <View style={styles.rootContainer}>     
          <Title>Guess My Number 🔢</Title>
            <Card>  
              <InstructionText>Enter a Number </InstructionText>
            <TextInput
                style={styles.textInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={reseInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetHandler}>Confirm</PrimaryButton>
                </View>
              </View>
              </Card>
        </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
        
       
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    }
})