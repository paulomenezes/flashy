import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { calculateColor } from '../utils/helpers';
import Card from '../components/Card';

export default class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('item').title,
    };
  };

  state = {
    item: null,
  };

  componentDidMount() {
    this.setState({
      item: this.props.navigation.getParam('item'),
    });
  }

  addCard = () => {
    this.props.navigation.navigate('QuizAddQuestion');
  };

  startQuiz = () => {
    this.props.navigation.navigate('QuizDetail');
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
