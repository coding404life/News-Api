import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  const [ searchTerms, setSearchTerms ] = useState('');

  const handleSearchInput = (e) => {
    setSearchTerms(e.target.value)
  }
  return (
    <div className="App">
      <Navbar handleSearchInput={handleSearchInput} />
      <div id="Content">
        <Home searchTerms={searchTerms} />
      </div>
    </div>
  )
}

export default App;
