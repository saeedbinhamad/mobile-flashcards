import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gray } from '../utils/colors';
import TextButton from './TextButton';

export default class QuizQAFlipper extends Component {



  render() {
    const { question, answer, toggleQA, showAnswer } = this.props;
    ansOrQuesView = (question, answer, showAnswer) => {
      if (showAnswer) {
        return answer
      } else {
        return question
      }   
  }
// create a helper function that will return
// the label (answer or question, depending on showAnswer value).
    return (
      <View>
          <View>
            <Text style={{ fontSize: 32 }}>{ansOrQuesView(question, answer, showAnswer)}</Text>
            <TextButton
              onPress={toggleQA}
              style={{ fontSize: 16, color: gray }}>{showAnswer ? ('Question') : ( 'Answer')}
            </TextButton>
          </View>
      </View>
    );
  }
}
