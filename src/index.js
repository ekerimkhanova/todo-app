import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './components/App/functional/AppContainer';

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);