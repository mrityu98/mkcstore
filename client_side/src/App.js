import { Box} from '@mui/material';
import './App.css';
import Home from './Components/Home/home';
import Header from './Components/Header/header';
import DetailedView from './Components/DetailedView/detailedView';
import DataProvider from './Context/dataprovider';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './Components/Cart/cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      
      <Header/>
      <Box style={{marginTop:55}}>
      <Routes>
      <Route path= '/' element={<Home />}/>
      <Route path= '/product/:id' element={<DetailedView />} />
      <Route path= '/cart' element={<Cart/>} />
      </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
