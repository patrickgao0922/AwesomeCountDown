/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class AwesomeCountDown extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cellTypeOne}>
                <Text style = {{top:50}}>Test</Text>
        </View>

        <View style={styles.cellTypeTwo} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dc143c',
  },
  cellTypeOne: {
    flex: 1,
    backgroundColor: '#dc143c',
  },
  cellTypeTwo: {
    flex:2,
    backgroundColor: 'skyblue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeCountDown', () => AwesomeCountDown);
