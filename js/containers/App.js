import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import Home from '../components/Home';
import {renderDevTools} from '../utils/devTools';
import styles from '../../css/app.css';

const store = configureStore();

export default React.createClass({
  render() {
    return (
      <div className={styles['body']}>
        {/* <Home /> is your app entry point */}
        <Provider store={store}>
          {() => <Home /> }
        </Provider>

        {/* only renders when running in DEV mode */
          renderDevTools(store)
        }
      </div>
    );
  }
});
