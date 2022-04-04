import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import { createContext } from 'react';
import useReviews from './Hooks/useReviews';

export const ReviewContext = createContext()

function App() {
  const [reviews, setReviews]= useReviews()
  return (
    <ReviewContext.Provider value={[reviews, setReviews]}>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFound/>}/> 
          </Routes>
    </ReviewContext.Provider>
  )
}

export default App;
