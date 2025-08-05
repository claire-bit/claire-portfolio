import React from 'react';
import Portfolio from './components/Portfolio';
import './index.css';
import { Icon } from 'lucide-react';
import { dynamicIconImports } from 'lucide-react/dynamic';


function App() {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;