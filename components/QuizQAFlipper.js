import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gray } from '../utils/colors';
import TextButton from './TextButton';

export default class QuizQAFlipper extends Component {
  render() {
    const { question, answer, toggleQA, showAnswer } = this.props;

    return (
      <View>
        {showAnswer ? (
          <View>
            <Text style={{ fontSize: 32 }}>{answer}</Text>
            <TextButton
              onPress={toggleQA}
              style={{ fontSize: 16, color: gray }}
            >
              Question
            </TextButton>
          </View>
        ) : (
          <View>
            <Text style={{ fontSize: 32 }}>{question}</Text>
            <TextButton
              onPress={toggleQA}
              style={{ fontSize: 16, color: gray }}
            >
              Answer
            </TextButton>
          </View>
        )}
      </View>
    );
  }
}
