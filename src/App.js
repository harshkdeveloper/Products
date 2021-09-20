import logo from './logo.svg';
// import './App.css';
import List from './Products/List';
import  {Home}  from './Products/Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Productcard from './Products/Productcard';
import  {Header}  from './Header/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
      
    <Route path='/List/:id' component={List}/>
   <Route path='/'component={Home}/>
    </Switch>
    <div>
       {/* <List/> */}
      
      {/* <Home/> */}
    </div>
   
    </BrowserRouter>
  );
}

export default App;