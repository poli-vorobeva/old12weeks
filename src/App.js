import React from 'react';
import { Navbar } from './components/Navbar';
import { TargetsState } from './components/context/targets/targetsState';
import { MainContent } from './containers/mainContent';
import { WeeksState } from './components/context/weeks/weeksState';
import { ByDaysState } from './components/context/weeksByDays/byDaysState';

function App() {
  
  
  return (
    <TargetsState>
      <WeeksState>
        <ByDaysState>
          <div className="container-fluid">
            <Navbar/>
            <MainContent/>
          </div>
        </ByDaysState>      
      </WeeksState> 
    </TargetsState>
    
  );
}

export default App;
