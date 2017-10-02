import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import AddDeck from './components/AddDeck';
import IndividualDeckView from './components/IndividualDeckView';
import NewQuestionView from './components/NewQuestionView';
import QuizView from './components/QuizView';

import PrimaryView from './components/PrimaryView';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { blue, white } from './utils/colors';
import { Constants } from 'expo';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { setLocalNotification } from './utils/helpers';

const Tabs = TabNavigator(
  {
    PrimaryView: {
      screen: PrimaryView,
      navigationOptions: {
        tabBarLabel: 'Created Decks',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        ),
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? blue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : blue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: { title: 'Home' },
  },
  IndividualDeckView: {
    screen: IndividualDeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      },
    },
  },
});

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={blue} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
