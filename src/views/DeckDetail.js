import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';

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
    if (prevProps.decks[this.state.deckId].questions.length !== this.props.decks[this.state.deckId].questions.length) {
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
          body={`${item.questions.length} cards`}
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
    flex: 1,
    flexDirection: 'row',
  },
});

const mapStateToProps = state => ({
  decks: state,
});

export default connect(mapStateToProps)(DeckDetail);
