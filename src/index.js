import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { TotalSumContextProvider } from 'components/TotalSumContextProvider/TotalSumContextProvider';
import App from 'components/App/App.jsx';
import './index.css';

// basename = '/wallet-front-end';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <TotalSumContextProvider>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/wallet-front-end">
            <App />
          </BrowserRouter>
        </PersistGate>
      </TotalSumContextProvider>
    </Provider>
  </React.StrictMode>
);
