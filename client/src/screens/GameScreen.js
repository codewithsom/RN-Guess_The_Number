import { StyleSheet, View, Alert, Text, FlatList } from 'react-native'
import React, {useState, useEffect } from 'react'
import Title from '../components/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../constants/colors';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber) 

        ) {
            Alert.alert("Don't lie 🤥", 'You know that this is wrong ❌', [{
            text: 'Sorry 🙏', style: 'cancel'
        }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);

    }
    const guessRoundsListLength = guessRounds.length;

  return (
      <View style={styles.screen}>
          <Title>Opponent's Guess 🤔</Title>
          <NumberContainer>{ currentGuess}</NumberContainer>
          <Card>
              <InstructionText style={styles.instructionText}>Higher 👆 or Lower 👇 </InstructionText>
              <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <FontAwesome name="plus" size={24} color={Colors.accent500} />
                    </PrimaryButton>
                  </View>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <FontAwesome name="minus" size={24} color={Colors.accent500} />
                    </PrimaryButton>
                  </View>
              </View>
          </Card>
          <View style={styles.listContainer}>
              {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound }</Text>)} */}
              <FlatList
                  data={guessRounds}
                  renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={ itemData.item} />}
                  keyExtractor={(item) => item}
              />
          </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
});