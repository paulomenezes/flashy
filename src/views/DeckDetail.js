import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';

import { calculateColor } from '../utils/helpers';
import Card from '../components/Card';

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
    const darkerColor = calculateColor('#E8EDF0', -0.1);

    if (!item) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={styles.container}>
        <Card color="#E8EDF0" style={{ height: 200, margin: 10 }}>
          <Text style={styles.deckTitle}>{item.title}</Text>
          <View style={[styles.deckQuantity, { backgroundColor: darkerColor }]}>
            <Text style={styles.deckQuantityText}>{item.questions.length} cards</Text>
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
            onPress={this.addCard}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'rgba(0, 0, 0, 0.4)', fontWeight: 'bold' }}>Add Card</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, height: 50 }} onPress={this.startQuiz}>
            <Card
              color={item.color}
              borderSize={5}
              style={{ height: 50, marginRight: 10 }}
              innerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={styles.buttonText}>Start Quiz</Text>
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

export default connect(mapStateToProps)(DeckDetail);
