import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MenuTop from './components/menu-top/menuTop';
import routes from './router/routes';
import Scrollbar from '../src/assets/smoot-scroll/smoot-scroll';
import './App.css';
import './styles/_variable.scss';

class App extends Component {
  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  }
  
  render() {
    return (
      // <Scrollbar
      //   damping={0.1} 
      //   thumbMinSize={20} 
      //   renderByPixels={true} 
      //   alwaysShowTracks={false} 
      //   continuousScrolling={true}
      // >
        <div className="app" style={{ height: '100vh' }}>
          <MenuTop style={{ zIndex: '99999' }} />
          <Router>
            <div className="App" >
              <div id="bodyPage" >
                <Switch >
                  {this.showContentMenu(routes)}
                </Switch>
              </div>
            </div>
          </Router>
        </div>
      // </Scrollbar>
    );
  }
}

export default App;
