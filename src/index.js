import { createStackNavigator } from 'react-navigation';
import Reactotron, { asyncStorage } from 'reactotron-react-native';

Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(asyncStorage())
  .connect();

import DeckList from './views/DeckList';
import DeckDetail from './views/DeckDetail';
import DeckAdd from './views/DeckAdd';
import QuizDetail from './views/QuizDetail';
import QuizAddQuestion from './views/QuizAddQuestion';

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
