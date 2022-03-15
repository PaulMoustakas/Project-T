import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ReviewDatabase from './components/ReviewDatabase';

const Main = () => {

    

return (         
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/db' element={<ReviewDatabase/>} />
  </Routes>
);
}
export default Main;