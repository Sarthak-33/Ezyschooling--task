import React from 'react';
import './App.css';
import Home from './Home';
import Post from './Post';
import { BrowserRouter as Router, Switch, Route} from 
'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

function App() {
  return (
    
    <Router>
        <h1 id="header1">The School Genie <span>Where fertile minds find nourishing soils.</span></h1>
    
    <div className="App">
//     Doing basic routing for a single-page-application
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Home/:id" component={Post} />
    </Switch>
    </div>
    
    </Router>
  );
}

export default App;
