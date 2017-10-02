import { ADD_CARD, RECEIVE_DECKS, ADD_DECK } from '../actions';

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return { ...state, ...action.decks };

    case ADD_DECK:
      return { ...state, ...action.deck };

    case ADD_CARD:
      const { title, questions, question_text, answer_text } = action.params;
      const newQA = { question: question_text, answer: answer_text };

      let newQuestions = JSON.parse(JSON.stringify(questions));
      newQuestions[newQuestions.length] = newQA;

      return {
        ...state,
        [title]: { ...state[title], questions: newQuestions },
      };

    default:
      return state;
  }
}

export default decks;
