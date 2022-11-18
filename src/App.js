import './App.css';

import {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'

import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import Instruction from './jointhecommunity/Instruction'
import Authentication from './components/Authentication/Authentication'

import BarberProfile from './components/BarberProfile/BarberProfile'

import AuthContext from './context/auth-context'

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <>

    <Route path='/' exact>
    <Navbar />
    <Content />
    <Footer />
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
