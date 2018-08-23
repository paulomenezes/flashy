import { createStackNavigator } from 'react-navigation';

import DeckList from './src/views/DeckList';
import DeckDetail from './src/views/DeckDetail';

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
