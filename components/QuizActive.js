import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gray, offwhite } from '../utils/colors';
import QuizRemaining from './QuizRemaining';
import QuizScoring from './QuizScoring';
import QuizQAFlipper from './QuizQAFlipper';

export default class QuizActive extends Component {
  render() {
    const {
      title,
      questions,
      onCorrect,
      onIncorrect,
      toggleQA,
      showAnswer,
      idx,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.group, { justifyContent: 'flex-start', flex: 1 }]}>
          <QuizRemaining n={questions.length - idx} />
        </View>
        <View style={[styles.group, { flex: 4 }]}>
          <QuizQAFlipper
            question={questions[idx].question}
            answer={questions[idx].answer}
            toggleQA={toggleQA}
            showAnswer={showAnswer}
          />
        </View>
        <View
          style={[styles.group, { justifyContent: 'space-around', flex: 2 }]}
        >
          <QuizScoring onCorrect={onCorrect} onIncorrect={onIncorrect} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 5,
    backgroundColor: offwhite,
  },
  group: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    padding: 10,
    backgroundColor: offwhite,
  },
});
