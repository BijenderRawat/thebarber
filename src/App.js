import './App.css';

import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'

import Instruction from './jointhecommunity/Instruction'

import {Route, Switch} from 'react-router-dom'

function App() {

  return (
    <Switch>

    <main>
    <Route path='/' exact>
    <Navbar />
    <Content />
    <Footer />
    </Route>
    </main>

    <Route path='./jointhecommunity' exact>
    <Instruction />
    </Route>

    </Switch>
  );
}

export default App;
