import './App.css';

import {Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import Instruction from './jointhecommunity/Instruction'
import Authentication from './components/Authentication/Authentication'

function App() {

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

    <Route path='/jointhecommunity/authentication' exact>
    <Authentication />
    </Route>

    </>

  );
}

export default App;
