import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Card from './Card';
import { calculateColor } from '../utils/helpers';

const DefaultCard = ({ color, style, innerStyle, title, textColor, body }) => (
  <Card color={color} style={style} innerStyle={innerStyle}>
    <Text style={[styles.deckTitle, { color: textColor }]}>{title}</Text>
    <View style={[styles.deckQuantity, { backgroundColor: calculateColor(color, -0.1) }]}>
      <Text style={{ color: textColor }}>{body}</Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  deckTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  deckQuantity: {
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonArea: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default DefaultCard;
