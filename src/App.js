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
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
