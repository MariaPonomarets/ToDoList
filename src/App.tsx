import React, {ReactElement} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigator from './navigations/MainNavigator';
import {store, persistor} from './state/store';

const App = (): ReactElement => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
