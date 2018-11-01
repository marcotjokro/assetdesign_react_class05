import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combine from './redux/combine';

import Main from './pages/Main';

const store = createStore(
	combine,
	applyMiddleware(
		Thunk
	)
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
				<Main />
			</Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
