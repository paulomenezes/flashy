import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { addDeck } from '../actions/deck';

import Card from '../components/Card';

class DeckAdd extends React.Component {
  state = {
    title: '',
  };

  addDeck = () => {
    this.props.addDeck(this.state.title);
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>

        <View style={styles.inputArea}>
          <TextInput style={styles.input} value={this.state.title} onChangeText={title => this.setState({ title })} />
        </View>

        <TouchableOpacity style={{ flex: 1, height: 50 }} onPress={this.addDeck} disabled={!this.state.title}>
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
  addDeck: title => dispatch(addDeck(title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckAdd);
