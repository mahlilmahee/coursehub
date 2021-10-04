
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Body  from './Component/Body/Body';
import Footer from './Component/Footer/Footer';
import None from './Component/None/None';
import Courses from './Component/Courses/Courses';
import About from './Component/About/About';
import Checkout from './Component/Checkout/Checkout';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Switch>
          <Route exact path='/'>
             <Header></Header>
             <Body></Body>
             <Footer></Footer>
          </Route>
          <Route  path='/home'>
             <Header></Header>
             <Body></Body>
             <Footer></Footer>
          </Route>
          <Route path='/courses'>
             <Header></Header>
            <Courses></Courses>
             <Footer></Footer>
          </Route>
          <Route  path='/checkout'>
             <Header></Header>
             <Checkout></Checkout>
             <Footer></Footer>
          </Route>
          <Route  path='/about'>
             <Header></Header>
             <About></About>
             <Footer></Footer>
          </Route>
          <Route   path='*'>
             <Header></Header>
             <None></None>
             <Footer></Footer>
          </Route>
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
