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
        <View style = {styles.cellType1}></View>
        <View style = {styles.cellType2}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cellType1: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  cellType2: {
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
