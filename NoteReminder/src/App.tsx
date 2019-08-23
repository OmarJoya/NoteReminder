import React from 'react'
import AppNavigator from './components/appNavigator';
import { Provider } from 'react-redux';
import store from './config/store';
import { Header } from 'react-native-elements';
import { StatusBar } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header containerStyle={{ marginTop: ((StatusBar.currentHeight || 0) * -1), backgroundColor: '#2196F3' }}
          centerComponent={{ text: 'Note Reminder', style: { color: 'white', fontSize: 15 } }} />
        <AppNavigator />
      </Provider>
    )
  }
}

export default App