import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { calculateColor } from '../utils/helpers';
import Card from '../components/Card';
import Button from '../components/Button';
import DashedButton from '../components/DashedButton';

class QuizResult extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('deck').title,
  });

  state = {
    item: null,
  };

  componentDidMount() {
    this.setState({
      correct: this.props.navigation.getParam('correct'),
      deck: this.props.navigation.getParam('deck'),
    });
  }

  backToDeck = () => {
    this.props.navigation.navigate('DeckDetail', {
      deck: this.state.deck,
    });
  };

  startQuiz = () => {
    this.props.navigation.navigate('QuizDetail', {
      deck: this.state.deck,
      question: 0,
      correct: 0,
    });
  };

  render() {
    const item = this.state.deck;
    const darkerColor = calculateColor('#E8EDF0', -0.1);

    if (!item) {
      return <Text>Loading...</Text>;
    }

    const corrects = this.state.correct;
    const totals = item.questions.length;
    const percent = Math.round((100 * corrects) / totals);

    return (
      <View style={styles.container}>
        <Card color="#E8EDF0" style={{ height: 200, margin: 10 }}>
          <Text style={styles.deckTitle}>{percent}%</Text>
          <View style={[styles.deckQuantity, { backgroundColor: darkerColor }]}>
            <Text style={styles.deckQuantityText}>{corrects} corrects</Text>
          </View>
          <View style={[styles.deckQuantity, { backgroundColor: darkerColor }]}>
            <Text style={styles.deckQuantityText}>{totals - corrects} incorrects</Text>
          </View>
        </Card>

        <View style={styles.buttonArea}>
          <DashedButton onPress={this.startQuiz} text="Restart Quiz" />

          <Button style={{ flex: 1 }} onPress={this.backToDeck} color={item.color} cardStyle={{ marginRight: 10 }} text="Back to Deck" />
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
  deckTitle: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 30,
    fontWeight: 'bold',
  },
  deckQuantity: {
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  deckQuantityText: {
    color: 'rgba(0, 0, 0, 0.4)',
  },
  buttonArea: {
    flex: 1,
    flexDirection: 'row',
  },
});

const mapStateToProps = state => ({
  decks: state,
});

export default connect(mapStateToProps)(QuizResult);
