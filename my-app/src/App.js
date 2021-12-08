
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Body  from './Component/Body/Body';
import Footer from './Component/Footer/Footer';
import None from './Component/None/None';
import Courses from './Component/Courses/Courses';
import About from './Component/About/About';
import Details from './Details/Details';
import Contact from './Component/Review/Contact';
import "tailwindcss/tailwind.css"
import Navbar from './Component/Header/Navbar';
// import Checkout from './Component/Checkout/Checkout';
function App() {
  return (
    <div className="App">
     <BrowserRouter> 
     <Navbar></Navbar>
     {/* <Header></Header> */}
    
       <Switch>
          <Route exact path='/'>
          {/* <Navbar></Navbar> */}
             <Body></Body>
            
          </Route>
          <Route  path='/home'>
            
             <Body></Body>
          
          </Route>
          <Route path='/courses'>
            
            <Courses></Courses>
            
          </Route>
          <Route  path='/contact'>
            
             {/* <Checkout></Checkout> */}
             <Contact></Contact>
             
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
