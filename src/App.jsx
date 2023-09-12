import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

const App = () => {
  document.body.style.backgroundColor = "#a69a81";
  return (
    <BrowserRouter>
       <NavBar />

      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
        <Route exact path="/cart" element={<Cart />}/>
      </Routes>
      
    </BrowserRouter>
  );
};

export default App;
