import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import Card from '../components/Card';

export default class QuizAddQuestion extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Question</Text>

        <View style={styles.inputArea}>
          <TextInput style={styles.input} />
        </View>

        <Text style={styles.title}>Answer</Text>

        <View style={styles.inputArea}>
          <TextInput style={styles.input} />
        </View>

        <TouchableOpacity style={{ flex: 1, height: 50 }}>
          <Card
            color="#949494"
            borderSize={5}
            style={{ height: 50, marginHorizontal: 10 }}
            innerStyle={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Card>
        </TouchableOpacity>
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
  title: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#949494',
  },
  inputArea: {
    margin: 10,
    padding: 10,
    backgroundColor: '#E8EDF0',
    borderRadius: 5,
  },
  input: {
    fontSize: 20,
    color: '#949494',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
