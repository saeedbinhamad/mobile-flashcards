import React, { Component } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { createDeck } from '../utils/api';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { blue, gray, offwhite, white } from '../utils/colors';
import TextInButton from './TextInButton';

class AddDeck extends Component {
  state = {
    text: '',
  };
  submit = () => {
    const entry = this.state;
    const { decks } = this.props;

    if (decks[entry.text]) {
      Alert.alert(
        'Deck Exists',
        'Aborting! A deck with that name already exists'
      );
      return;
    } else {
      const newDeck = { [entry.text]: { title: entry.text, questions: [] } };

      this.props.dispatch(addDeck(newDeck));
      createDeck(newDeck);

      this.setState({ text: '' });
      this.props.navigation.navigate('IndividualDeckView', {
        title: entry.text,
      });
      return;
    }
  };
  render() {
    const { text } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={{ fontSize: 20 }}>
          Name your new deck here please!
        </Text>
        <TextInput
          value={text}
          style={styles.input}
          onChangeText={text => this.setState({ text })}
        />
        <TextInButton onPress={this.submit}>SUBMIT</TextInButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: offwhite,
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: gray,
    margin: 20,
  }
});
function mapStateToProps(state) {
  return {
    decks: state,
  };
}
export default connect(mapStateToProps)(AddDeck);
