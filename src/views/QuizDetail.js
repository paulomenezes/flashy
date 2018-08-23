import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { calculateColor } from '../utils/helpers';
import Card from '../components/Card';

export default class QuizDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'React Quiz'),
    };
  };

  addCard = () => {
    this.props.navigation.navigate('QuizAddQuestion');
  };

  render() {
    const item = { key: '1', quantity: 10, name: 'React', color: '#FFA104' };
    const darkerColor = calculateColor('#E8EDF0', -0.1);

    return (
      <View style={styles.container}>
        <Card color="#E8EDF0" style={{ height: 200, margin: 10 }}>
          <View style={[styles.deckQuantity, { backgroundColor: darkerColor }]}>
            <Text style={styles.deckQuantityText}>Question 1 of 2</Text>
          </View>
          <Text style={styles.deckTitle}>Is React a framework?</Text>
        </Card>

        <TouchableOpacity style={{ height: 50 }}>
          <Card
            color={item.color}
            borderSize={5}
            style={{ height: 50, marginHorizontal: 10 }}
            innerStyle={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.buttonText}>Show Answer</Text>
          </Card>
        </TouchableOpacity>

        <Card color="#E8EDF0" style={{ height: 200, margin: 10 }}>
          <Text style={styles.deckTitle}>Nope, it is a library!</Text>
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
              <Text style={{ color: 'rgba(0, 0, 0, 0.4)', fontWeight: 'bold' }}>Incorrect</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, height: 50 }} onPress={this.startQuiz}>
            <Card
              color={item.color}
              borderSize={5}
              style={{ height: 50, marginRight: 10 }}
              innerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={styles.buttonText}>Correct</Text>
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
    marginBottom: 10,
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
