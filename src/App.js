import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import ShopPage from './Pages/ShopPage/ShopPage';
import FeaturedPage from './Pages/FeaturedPage/FeaturedPage';
import RecomendedPage from './Pages/RecomendedPage/RecomendedPage';
import NavigationHeader from './Components/NavigationHeader/NavigationHeader';
import DragDrop from "./Components/Drag and Drop/DragDrop.jsx"
function App() {
  return (
    <div>  
      {/* <BrowserRouter>
      <NavigationHeader />
        <Routes>
          <Route path='/' element = {<HomePage />} />
          <Route path='/shop' element = {<ShopPage />} />
          <Route path='/featured' element = {<FeaturedPage />} />
          <Route path='/recomended' element = {<RecomendedPage />} />
        </Routes>
      </BrowserRouter> */}
      <DragDrop />
    </div>
  );
}

export default App;
