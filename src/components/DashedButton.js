import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const Button = ({ onPress, text }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'rgba(0, 0, 0, 0.4)', fontWeight: 'bold' }}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderStyle: 'dashed',
    marginHorizontal: 10,
  },
});

export default Button;
