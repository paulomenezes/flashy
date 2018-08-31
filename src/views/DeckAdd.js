import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { guid } from '../utils/helpers';
import { addDeck } from '../actions/deck';

import Button from '../components/Button';

class DeckAdd extends React.Component {
  state = {
    title: '',
  };

  addDeck = () => {
    const id = guid();
    this.props.addDeck(id, this.state.title);
    this.props.navigation.navigate('DeckDetail', {
      item: {
        id,
        title: this.state.title,
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>

        <View style={styles.inputArea}>
          <TextInput style={styles.input} value={this.state.title} onChangeText={title => this.setState({ title })} />
        </View>

        <Button onPress={this.addDeck} disabled={!this.state.title} color="#949494" cardStyle={{ marginHorizontal: 10 }} text="Submit" />
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
    margin: 10,
    fontSize: 30,
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

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  addDeck: (id, title) => dispatch(addDeck(id, title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckAdd);
