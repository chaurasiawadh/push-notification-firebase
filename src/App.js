import React from 'react';
import './App.css';
import { askForPermissioToReceiveNotifications } from './push-notification';

const App = () => (
  <div className="App">
    <button onClick={askForPermissioToReceiveNotifications} >
      Receive notifications
    </button>
  </div>
);

export default App;
