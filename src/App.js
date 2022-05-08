// import { Circle } from 'react-preloaders';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import About from "./Pages/About/About";
import AddInventory from "./Pages/AddInventory/AddInventory";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import ManageInventories from "./Pages/manageinventories/ManageInventories";
import MyItem from "./Pages/myitem/MyItem";
import NotFound from "./Pages/NotFound/NotFound";
import Registration from "./Pages/Registration/Registration";
import ResetPass from "./Pages/ResetPass/ResetPass";
import spinner from './Pages/images/Blocks-1s-200px.gif'
function App() {
  const [ prelaoder, setPreload ] = useState(true);
       setTimeout(() => setPreload(false), 3000)

    if (prelaoder) {
      return <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center'> <img src={spinner} alt=""  />  </div> 
}

  return !prelaoder && <div>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/myinventory" element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>

          }>
          </Route>
          <Route path="/resetpass" element={<ResetPass></ResetPass>}></Route>
          <Route path="/manageinventory" element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>

          }></Route>
          <Route path="/registration" element=
            {
              <Registration></Registration>
            }>

          </Route>
          <Route path="/inventory/:_id" element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }></Route>
          <Route path="/addinventory" element={
            <RequireAuth>
              <AddInventory></AddInventory>
            </RequireAuth>
          }></Route>
          <Route path="/*" element={<NotFound></NotFound>}> </Route>
        </Routes>
      </BrowserRouter>

    </div>;
}

export default App;
