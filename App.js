import React from 'react'
import RootStack from './src/route.config'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './src/redux/configureStore'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
)

export default App