import React from 'react';
import {
  View,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { gray, blue, white } from '../utils/colors';

export default TextInButton = ({ children, onPress, style = {} }) => {
  const btnStyle = Platform.OS === 'ios' ? styles.iosBtn : styles.AndroidBtn;
  return (
    <TouchableOpacity onPress={onPress} style={[btnStyle, style]}>
      <Text style={[styles.btnText, style]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iosBtn: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidBtn: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
});
