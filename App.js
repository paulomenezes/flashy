import { createStackNavigator } from 'react-navigation';

import DeckList from './src/views/DeckList';
import DeckDetail from './src/views/DeckDetail';
import DeckAdd from './src/views/DeckAdd';
import QuizDetail from './src/views/QuizDetail';
import QuizAddQuestion from './src/views/QuizAddQuestion';

export default createStackNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        title: 'Flashy',
      },
    },
    DeckDetail: {
      screen: DeckDetail,
    },
    DeckAdd: {
      screen: DeckAdd,
      navigationOptions: {
        title: 'New Deck',
      },
    },
    QuizDetail: {
      screen: QuizDetail,
    },
    QuizAddQuestion: {
      screen: QuizAddQuestion,
      navigationOptions: {
        title: 'New Card',
      },
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 0,
        shadowColor: '#949494',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      headerTintColor: '#949494',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
