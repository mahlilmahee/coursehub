
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Body  from './Component/Body/Body';
import Footer from './Component/Footer/Footer';
import None from './Component/None/None';
import Courses from './Component/Courses/Courses';
import About from './Component/About/About';
import Reveiw from './Component/Review/Reveiw';
import Details from './Details/Details';
// import Checkout from './Component/Checkout/Checkout';
function App() {
  return (
    <div className="App">
     <BrowserRouter> 
     <Header></Header>
    
       <Switch>
          <Route exact path='/'>
             
             <Body></Body>
            
          </Route>
          <Route  path='/home'>
            
             <Body></Body>
          
          </Route>
          <Route path='/courses'>
            
            <Courses></Courses>
            
          </Route>
          <Route  path='/review'>
            
             {/* <Checkout></Checkout> */}
             <Reveiw></Reveiw>
             
          </Route>
          <Route path='/detail/:id'>
             <Details></Details>
          </Route>
          <Route  path='/about'>
            
             <About></About>
            
          </Route>
          
         
          <Route   path='*'>
           
             <None></None>
            
          </Route>
          
       </Switch>
     </BrowserRouter> 
     <Footer></Footer>
    </div>
  );
}

export default App;
