import './App.css';
import {Route} from 'react-router-dom'

import Authentication from './components/Authentication/Authentication'

import BarberProfile from './components/BarberProfile/BarberProfile'
import MainPage from './components/MainPage'

function App() {

  return (
    <>
    
    <Route path='/' exact>
    <MainPage />
    </Route>

    <Route path='/jointhecommunity/authentication' exact>
    <Authentication />
    </Route>

    <Route path='/jointhecommunity/profile' exact>
    <BarberProfile />
    </Route>
    
    </>
  );
}

export default App;