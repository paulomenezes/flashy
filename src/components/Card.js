import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { calculateColor } from '../utils/helpers';

export default class Card extends React.Component {
  render() {
    const darkerColor = calculateColor(this.props.color, -0.1);

    return (
      <View style={[styles.deckContainer, { backgroundColor: darkerColor }, { ...this.props.style }]}>
        <View
          style={[styles.deckContainerButton, { backgroundColor: this.props.color, bottom: this.props.borderSize || 10, ...this.props.innerStyle }]}
        >
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckContainer: {
    borderRadius: 10,
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
});
