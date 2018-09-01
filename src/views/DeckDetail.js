import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';

import { removeDeck } from '../actions/deck';

import DefaultCard from '../components/DefaultCard';
import Button from '../components/Button';
import DashedButton from '../components/DashedButton';

class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('item').title,
  });

  state = {
    item: null,
  };

  componentDidMount() {
    const deck = this.props.navigation.getParam('item');
    this.setState({
      deckId: deck.id,
      item: this.props.decks[deck.id],
    });
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.decks[this.state.deckId] &&
      prevProps.decks[this.state.deckId].questions.length !== this.props.decks[this.state.deckId].questions.length
    ) {
      this.setState({
        item: this.props.decks[this.state.deckId],
      });
    }
  }

  addCard = () => {
    this.props.navigation.navigate('QuizAddQuestion', {
      deck: this.props.navigation.getParam('item'),
    });
  };

  editCards = () => {
    if (this.state.item.questions.length > 0) {
      this.props.navigation.navigate('DeckEditCards', {
        deck: this.props.navigation.getParam('item'),
      });
    } else {
      Alert.alert('0 cards', 'You should add at least one card');
    }
  };

  startQuiz = () => {
    if (this.state.item.questions.length > 0) {
      this.props.navigation.navigate('QuizDetail', {
        deck: this.state.item,
        question: 0,
        correct: 0,
      });
    } else {
      Alert.alert('0 cards', 'You should add at least one card');
    }
  };

  deleteQuiz = () => {
    Alert.alert(
      'Delete Quiz',
      'Are you sure?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        {
          text: 'Yes',
          onPress: () => {
            this.props.removeDeck(this.state.item);
            this.props.navigation.goBack();
          },
        },
      ],
      { cancelable: true }
    );
  };

  render() {
    const item = this.state.item;

    if (!item) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={styles.container}>
        <DefaultCard
          color="#E8EDF0"
          style={{ height: 200, margin: 10 }}
          title={item.title}
          body={`${item.questions.length} ${item.questions.length === 1 ? 'card' : 'cards'}`}
          textColor="rgba(0, 0, 0, 0.4)"
        />

        <View style={styles.buttonArea}>
          <DashedButton onPress={this.addCard} text="Add Card" />

          <Button
            style={{ flex: 1, height: 50 }}
            onPress={this.startQuiz}
            color={item.color}
            cardStyle={{ height: 50, marginRight: 10 }}
            text="Start Quiz"
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.buttonArea}>
          <DashedButton onPress={this.editCards} text="Edit Cards" />
          <DashedButton style={{ marginLeft: 0 }} onPress={this.deleteQuiz} text="Delete Quiz" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingTop: 10,
  },
  buttonArea: {
    flexDirection: 'row',
  },
  divider: {
    height: 1,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: '#D1D5D8',
  },
});

const mapStateToProps = state => ({
  decks: state,
});
const mapDispatchToProps = dispatch => ({
  removeDeck: deck => dispatch(removeDeck(deck)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckDetail);
