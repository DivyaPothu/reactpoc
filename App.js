import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2>Welcome to React POC</h2>
               <ul>
                  <li>
                  <img src="./images/image3.jpg"/>
                  <Link to={'/'}>Pai Comforts - Flamingo</Link></li>
                  <li>
                  <img src="./images/image4.jpg"/>
                  <Link to={'/Login'}>Siddiqua Function Hall</Link></li>
                    <li>
                  <img src="./images/image6.jpg"/>
                  <Link to={'/Login'}>MQ Palace Function Hall</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;