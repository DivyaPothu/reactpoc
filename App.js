import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import MQ from './MQ';
import {hashHistory} from 'react-router'; 


class App extends Component {
   render() {
      return (
       <Router>
    

            <div>
               <h2>Welcome to React POC</h2>
                <table>
                <tr>
                <td>
             <Link to={'/image'}><img src="./images/image3.jpg"/></Link>>
               <td><h4>Pai Comforts - Flamingo</h4></td></td>
             
            
                   <td><Link to="/Login"><img src="./images/image4.jpg"/></Link>
                <td> <h4>Siddiqua Function Hall</h4></td></td>
                
                 <td><Link to={'/MQ'}><img src="./images/image6.jpg"/></Link>
                   <td><h4>MQ Palace Function Hall</h4></td></td></tr></table>
               <Switch>
                  <Route exact path='/image' component={Home} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/MQ' component={MQ}/>
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;