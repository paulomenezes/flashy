import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'flashy:app';

export function getDecks() {
  // AsyncStorage.clear();

  return AsyncStorage.getItem(STORAGE_KEY).then(JSON.parse);
}

export function getDeck(deckId) {
  return getDecks().then(decks => decks[deckId]);
}

export function saveDeck(deck) {
  AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({
      [deck.id]: deck,
    })
  );
}

export function addCardToDeck(card) {
  return getDeck(card.deckId).then(deck => {
    deck.questions.push(card);

    return saveDeck(deck);
  });
}
