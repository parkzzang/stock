import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Second from './result';

export default function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
          <Routes>
              <Route path={"/home"} element={<Home />}></Route>
              <Route path={"/result"} element={<Second />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}