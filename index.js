import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import React from 'react';

export default class ToDo extends React.Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent(appName, () => ToDo);
