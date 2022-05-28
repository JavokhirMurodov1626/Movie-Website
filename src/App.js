import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import Customers from './components/customers';
import Register from './components/register';
import Products from './components/products';
import Login from './components/login';
import Movies from './components/movies';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';

function App() {
  
  return (
    <BrowserRouter>
     <div className='container'>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:id' element={<MovieForm/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/not-found' element={<NotFound/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
