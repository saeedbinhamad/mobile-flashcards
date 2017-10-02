import { AsyncStorage } from 'react-native';
import { formatDecks, DECKS_STORAGE_KEY } from './decks';

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(r => formatDecks(r));
}

export function createDeck(deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
}

export function addCardDeck({ card, deckName }) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
    let decks = JSON.parse(result);

    let newQuestions = JSON.parse(JSON.stringify(decks[deckName].questions));
    newQuestions[newQuestions.length] = card;

    const value = JSON.stringify({
      [deckName]: { title: deckName, questions: newQuestions },
    });

    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, value);
  });
}
