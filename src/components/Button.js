import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import Card from './Card';

const Button = ({ style, onPress, color, cardStyle, text, disabled }) => (
  <TouchableOpacity style={[style, { height: 50, opacity: disabled ? 0.4 : 1 }]} onPress={onPress} disabled={disabled}>
    <Card color={color} borderSize={5} style={{ height: 50, ...cardStyle }} innerStyle={styles.cardStyle}>
      <Text style={styles.buttonText}>{text}</Text>
    </Card>
  </TouchableOpacity>
);

const styles = {
  cardStyle: { justifyContent: 'center', alignItems: 'center' },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
};

export default Button;
