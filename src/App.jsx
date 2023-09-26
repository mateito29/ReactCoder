import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Document from "./components/Document";

const App = () => {
  document.body.style.backgroundColor = "#765827";
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>

)
}
export default App;
