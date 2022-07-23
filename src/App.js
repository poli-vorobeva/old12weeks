import React from 'react';
import { TargetsState } from './components/context/targets/targetsState';
import { MainContent } from './containers/mainContent';
import { WeeksState } from './components/context/weeks/weeksState';
import { ByDaysState } from './components/context/weeksByDays/byDaysState';
import { AxiosState } from './components/context/axiosContext/axiosState';
import './App.css'
import { Navbar } from './components/Navbar/Navbar';

function App() {
  
  
  return (
    <TargetsState>
      <WeeksState>
        <ByDaysState>
          <AxiosState>
            <div className="container-fluid AppStyle">
              <Navbar />
              <MainContent/>
            </div>
          </AxiosState>         
        </ByDaysState>      
      </WeeksState> 
    </TargetsState>
    
  );
}

export default App;
