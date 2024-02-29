import Navbar from './components/NavBar';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './components/create';
import Notfound from './components/Notfound';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import Blogdetails from './components/Blogdetails';


function App() {
  return (
         <Router>
            <div className='App'>
               <Navbar/>
               <div className='content'>
 
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>   
                 
                  <Route path='/create'>
                    <Create/>
                  </Route>

                  <Route path='/Blogdetails/:id'>
                    <Blogdetails/>
                  </Route>

                  <Route path='*'>
                    <Notfound/>
                  </Route>               
                </Switch>
                </div>
            </div>             
         </Router >

  );
}

export default App;
