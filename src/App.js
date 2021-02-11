import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import CreateBlog from './components/Create'
const App = () => {
  const [ searchTerms, setSearchTerms ] = useState('');

  const handleSearchInput = (e) => {
    setSearchTerms(e.target.value)
  }

  return (
    <Router>
      <div className="App">
        <Navbar handleSearchInput={handleSearchInput} />
        <div id="Content">
          <Switch>
            <Route exact path="/">
              <Home searchTerms={searchTerms} />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App;
