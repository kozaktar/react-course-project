import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store, persistore} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react'; 


ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <PersistGate persistor={persistore}>
            <App />
        </PersistGate>
    </BrowserRouter>
</Provider>, 
document.getElementById('root'));


