import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gray } from '../utils/colors';
import QuizActive from './QuizActive';
import QuizFinale from './QuizFinale';

export default class QuizView extends Component {
  state = {
    idx: 0,
    nCorrect: 0,
    showAnswer: false,
  };
  onCorrect = () => {
    const { idx, nCorrect } = this.state;

    this.setState({ idx: idx + 1, nCorrect: nCorrect + 1, showAnswer: false });
  };
  onIncorrect = () => {
    const { idx } = this.state;

    this.setState({ idx: idx + 1, showAnswer: false });
  };
  toggleQA = () => {
    const { showAnswer } = this.state;

    this.setState({ showAnswer: !showAnswer });
  };
  resetQuiz = () => {
    this.setState({ idx: 0, nCorrect: 0 });
  };
  render() {
    const { idx, nCorrect, showAnswer } = this.state;
    const { title, questions } = this.props.navigation.state.params;

    return (
      <View style={{ flex: 1 }}>
        {idx < questions.length ? (
          <QuizActive
            title={title}
            questions={questions}
            onCorrect={this.onCorrect}
            onIncorrect={this.onIncorrect}
            toggleQA={this.toggleQA}
            showAnswer={showAnswer}
            idx={idx}
          />
        ) : (
          <QuizFinale
            nCorrect={nCorrect}
            resetQuiz={this.resetQuiz}
            navigation={this.props.navigation}
          />
        )}
      </View>
    );
  }
}
