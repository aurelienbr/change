import React from 'react';
import { Provider } from 'react-redux';

import AppContainer from '~containers/app/AppContainer';
import { store, persistor } from '~reducers/store';
import { PersistGate } from 'redux-persist/integration/react';

const AppProvider = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>
);

export default AppProvider;
