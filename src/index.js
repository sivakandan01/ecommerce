import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { store, persist } from "./store/store"
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>  {/* loading can be used to show any loading state  */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
