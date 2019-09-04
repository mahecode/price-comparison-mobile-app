import React, {Component} from 'react';
import {View, Text, AppRegistry, ScrollView } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


import Home from './Containers/Home/Home';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};


export default class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
       <Home />
      </PaperProvider>
    );
  }
}


AppRegistry.registerComponent('App', () => App);