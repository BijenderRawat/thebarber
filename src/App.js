import './App.css';

import {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'

import Instruction from './jointhecommunity/Instruction'
import Authentication from './components/Authentication/Authentication'

import BarberProfile from './components/BarberProfile/BarberProfile'
import AuthContext from './context/auth-context'
import MainPage from './components/MainPage'

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <>
    
    <Route path='/' exact>
    <MainPage />
    </Route>

    <Route path='/jointhecommunity' exact>
    <Instruction />
    </Route>

    {authCtx.isLoggedIn && (
    <Route path='/jointhecommunity/profile' exact>
    <BarberProfile />
    </Route>
    )}

    {!authCtx.isLoggedIn && (
    <Route path='/jointhecommunity/authentication' exact>
    <Authentication />
    </Route>
    )}

    <Route path='*'>
    <Redirect to='/' />
    </Route>
    
    </>
  );
}

export default App;
