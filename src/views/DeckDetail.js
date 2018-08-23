import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { calculateColor } from '../utils/helpers';
import Card from '../components/Card';

export default class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'React'),
    };
  };

  render() {
    const item = { key: '1', quantity: 10, name: 'React', color: '#FFA104' };
    const darkerColor = calculateColor(item.color, -0.1);

    return (
      <View style={styles.container}>
        <Card color={item.color} style={{ height: 200, margin: 10 }}>
          <Text style={styles.deckTitle}>{item.name}</Text>
          <View style={[styles.deckQuantity, { backgroundColor: darkerColor }]}>
            <Text style={styles.deckQuantityText}>{item.quantity} cards</Text>
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
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'rgba(0, 0, 0, 0.4)', fontWeight: 'bold' }}>Add Card</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flex: 1, height: 50 }}>
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
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  deckQuantity: {
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  deckQuantityText: {
    color: '#FFF',
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
