import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductView from './componets/ProductView';
import Home from './componets/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiamondList from './componets/DiamondList';
import { MantineProvider, } from '@mantine/core';
import '@mantine/core/styles.css';

function App() {
  return (
    <div className="App">
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<ProductView />} />
            <Route path='/diamondlist' element={<DiamondList />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}
// https://html.weingenious.in/love_bloom/


export default App;
