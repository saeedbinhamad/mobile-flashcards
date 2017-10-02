import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gray } from '../utils/colors';

export default function QuizRemaining({ n }) {
  return (
    <View>
      <Text>{n} cards remaining</Text>
    </View>
  );
}
