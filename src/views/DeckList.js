import React from 'react';
import { TouchableOpacity, Text, View, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import { loadDecks } from '../actions/deck';

import Card from '../components/Card';
import { calculateColor } from '../utils/helpers';

const { width } = Dimensions.get('window');
const size = width / 2 - 15;

class DeckList extends React.Component {
  componentDidMount() {
    this.props.loadDecks();
  }

  selectDeck = item => {
    this.props.navigation.navigate('DeckDetail', {
      item,
    });
  };

  addDeck = () => {
    this.props.navigation.navigate('DeckAdd');
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.decks}
          keyExtractor={item => item.title}
          numColumns={2}
          renderItem={({ item, index }) => {
            const darkerColor = calculateColor(item.color, -0.1);

            if (index === 0) {
              return (
                <TouchableOpacity onPress={this.addDeck}>
                  <View style={styles.addDeckContainer}>
                    <Icon name="plus" size={40} color="#86ADBB" />
                  </View>
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity onPress={() => this.selectDeck(item)}>
                  <Card color={item.color} style={styles.deckContainer}>
                    <Text style={styles.deckTitle}>{item.title}</Text>
                    <View style={[styles.deckQuantity, { backgroundColor: darkerColor }]}>
                      <Text style={styles.deckQuantityText}>{item.questions.length} cards</Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            }
          }}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    flexDirection: 'row',
    paddingTop: 10,
  },
  addDeckContainer: {
    backgroundColor: '#E8EDF0',
    padding: 10,
    marginLeft: 10,
    marginVertical: 10,
    borderRadius: 10,
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckContainer: {
    marginLeft: 10,
    marginVertical: 10,
    width: size,
    height: size,
  },
  deckTitle: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  deckQuantity: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  deckQuantityText: {
    color: '#FFF',
  },
};

const mapStateToProps = state => ({
  decks: Object.values(state),
});

const mapDispatchToProps = dispatch => ({
  loadDecks: () => dispatch(loadDecks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);
