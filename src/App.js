import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import SingleProduct from "./components/FilteredProducts/SingleProduct";
import Login from './components/Login/Login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const {authUser} = user;
  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main></Main> : <Login></Login>}></Route>
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
