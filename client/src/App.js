import React from 'react';
import './App.css';
import { BrowserRouter as Router,  Route} from 'react-router-dom';
import AddChar  from './views/AddChar';
import ShowChar from './views/ShowChar';
import EditChar from './views/EditChar';
import DetailChar from './views/DetailChar';
import Home from './views/Home';


function App() {
  return (
    <Router>
          <Route exact path='/' component={Home}/>
          <Route exact path='/addChar' component={AddChar}/>
          <Route exact path='/getChars' component={ShowChar}/>
          <Route exact path='/char/edit/:id' component={EditChar}/>
          <Route exact path='/char/:id' component={DetailChar}/>

    </Router>
  );
}

export default App;
