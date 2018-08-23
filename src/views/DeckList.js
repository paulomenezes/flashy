import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { calculateColor } from '../utils/helpers';

const { width } = Dimensions.get('window');

export default class DeckList extends React.Component {
  state = {
    data: [
      { key: '0' },
      { key: '1', quantity: 10, name: 'React', color: '#FFA104' },
      { key: '2', quantity: 15, name: 'Redux', color: '#0096F5' },
      { key: '3', quantity: 5, name: 'React Native', color: '#446DFF' },
      { key: '4', quantity: 20, name: 'Udacity', color: '#FF2C3D' },
    ],
  };

  selectDeck = () => {
    this.props.navigation.navigate('DeckDetail');
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.key}
          numColumns={2}
          renderItem={({ item, index }) => {
            const darkerColor = calculateColor(item.color, -0.1);

            return (
              <TouchableOpacity onPress={this.selectDeck}>
                {index === 0 ? (
                  <View style={styles.addDeckContainer}>
                    <Icon name="plus" size={40} color="#86ADBB" />
                  </View>
                ) : (
                  <View style={[styles.deckContainer, { backgroundColor: darkerColor }]}>
                    <View style={[styles.deckContainerButton, { backgroundColor: item.color }]}>
                      <Text style={styles.deckTitle}>{item.name}</Text>
                      <View style={[styles.deckQuantity, { backgroundColor: darkerColor }]}>
                        <Text style={styles.deckQuantityText}>{item.quantity} cards</Text>
                      </View>
                    </View>
                  </View>
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    width: width / 2 - 15,
    height: width / 2 - 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deckContainer: {
    backgroundColor: '#EE8602',
    marginLeft: 10,
    marginVertical: 10,
    borderRadius: 10,
    width: width / 2 - 15,
    height: width / 2 - 15,
  },
  deckContainerButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFA104',
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  deckQuantityText: {
    color: '#FFF',
  },
});