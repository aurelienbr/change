import React from 'react';
import { Provider } from 'react-redux';

import App from '~components/app/App';
import { store, persistor } from '~reducers/store';
import { PersistGate } from 'redux-persist/integration/react';

const AppProvider = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export default AppProvider;
