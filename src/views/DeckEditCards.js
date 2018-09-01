import React from 'react';
import { TouchableOpacity, Text, Button, View, Alert, Dimensions, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { removeQuestions } from '../actions/deck';
import DefaultCard from '../components/DefaultCard';

const { width } = Dimensions.get('window');
const size = width / 2 - 15;

class DeckEditCards extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Button
        onPress={navigation.getParam('deleteCards')}
        title={`Delete (${navigation.getParam('count')})`}
        color="#949494"
        disabled={navigation.getParam('count') === 0}
      />
    ),
  });

  state = {
    selecteds: [],
    deck: undefined,
  };

  componentDidMount() {
    this.props.navigation.setParams({ count: 0 });
    this.props.navigation.setParams({ deleteCards: this.deleteCards });

    this.setState({
      deck: this.props.decks[this.props.navigation.getParam('deck').id],
    });
  }

  deleteCards = () => {
    Alert.alert(
      'Delete Question',
      `Are you sure? You will remove ${this.state.selecteds.length} question(s)`,
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        {
          text: 'Yes',
          onPress: () => {
            this.props.removeQuestions(this.state.deck.id, this.state.selecteds);
            this.setState({
              selecteds: [],
            });

            this.props.navigation.setParams({ count: 0 });

            if (this.state.selecteds.length === this.state.deck.questions.length) {
              this.props.navigation.goBack();
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  selectCard = index => {
    const selecteds = this.state.selecteds;

    if (selecteds.indexOf(index) >= 0) {
      selecteds.splice(selecteds.indexOf(index), 1);
    } else {
      selecteds.push(index);
    }

    this.setState({ selecteds });

    this.props.navigation.setParams({ count: selecteds.length });
  };

  renderItem = ({ item, index }) => {
    const isSelected = this.state.selecteds.indexOf(index) >= 0;

    return (
      <TouchableOpacity onPress={() => this.selectCard(index)}>
        <DefaultCard
          color="#E8EDF0"
          style={{ ...styles.deckContainer, borderWidth: isSelected ? 2 : 0, borderColor: '#0078CF' }}
          title={item.question}
          body={item.answer}
          textColor="rgba(0, 0, 0, 0.4)"
        />
      </TouchableOpacity>
    );
  };

  render() {
    if (!this.state.deck) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.deck.questions}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
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
  deckContainer: {
    marginLeft: 10,
    marginBottom: 10,
    width: width - 20,
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
  decks: state,
});

const mapDispatchToProps = dispatch => ({
  removeQuestions: (deckId, questions) => dispatch(removeQuestions(deckId, questions)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckEditCards);
