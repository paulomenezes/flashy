import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';

import { calculateColor } from '../utils/helpers';
import Card from '../components/Card';

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
          <TouchableOpacity
            style={{
              flex: 1,
              height: 50,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: 'rgba(0, 0, 0, 0.2)',
              borderStyle: 'dashed',
              marginHorizontal: 10,
            }}
            onPress={this.startQuiz}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'rgba(0, 0, 0, 0.4)', fontWeight: 'bold' }}>Restart Quiz</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, height: 50 }} onPress={this.backToDeck}>
            <Card
              color={item.color}
              borderSize={5}
              style={{ height: 50, marginRight: 10 }}
              innerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={styles.buttonText}>Back to Deck</Text>
            </Card>
          </TouchableOpacity>
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
  deckContainer: {
    margin: 10,
    borderRadius: 10,
    height: 200,
  },
  deckContainerButton: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'flex-start',
    position: 'absolute',
    top: 0,
    bottom: 10,
    left: 0,
    right: 0,
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
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  decks: state,
});

export default connect(mapStateToProps)(QuizResult);
