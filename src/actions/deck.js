export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

export const addDeck = title => {
  return {
    type: ADD_DECK,
    title,
  };
};

export const addQuestion = (question, answer) => {
  return {
    type: ADD_QUESTION,
    question: {
      question,
      answer,
    },
  };
};
