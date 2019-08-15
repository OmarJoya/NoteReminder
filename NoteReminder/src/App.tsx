import React from 'react'
import AppNavigator from './components/appNavigator';
import { Provider } from 'react-redux';
import store from './config/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App