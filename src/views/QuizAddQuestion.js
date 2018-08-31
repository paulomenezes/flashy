import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addQuestion } from '../actions/deck';
import Button from '../components/Button';

class QuizAddQuestion extends React.Component {
  state = {
    question: '',
    answer: '',
  };

  submit = () => {
    const deck = this.props.navigation.getParam('deck');

    this.props.addQuestion(deck.id, this.state.question, this.state.answer);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Question</Text>

        <View style={styles.inputArea}>
          <TextInput style={styles.input} value={this.state.question} onChangeText={question => this.setState({ question })} />
        </View>

        <Text style={styles.title}>Answer</Text>

        <View style={styles.inputArea}>
          <TextInput style={styles.input} value={this.state.answer} onChangeText={answer => this.setState({ answer })} />
        </View>

        <Button
          onPress={this.submit}
          cardStyle={{ marginHorizontal: 10 }}
          color="#949494"
          text="Submit"
          disabled={!this.state.question || !this.state.answer}
        />
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
});

const mapDispatchToProps = dispatch => ({
  addQuestion: (deckId, question, answer) => dispatch(addQuestion(deckId, question, answer)),
});

export default connect(
  null,
  mapDispatchToProps
)(QuizAddQuestion);
