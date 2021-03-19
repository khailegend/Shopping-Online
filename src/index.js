import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Scrollbar from '../src/assets/smoot-scroll/smoot-scroll';
ReactDOM.render(
  <React.Fragment>
    {/* <Scrollbar 
        damping={0.1} 
        thumbMinSize={20} 
        renderByPixels={true} 
        alwaysShowTracks={false} 
        continuousScrolling={true}
      > */}
      <BrowserRouter >
          <App  />
      </BrowserRouter>
      {/* </Scrollbar> */}
  </React.Fragment>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
