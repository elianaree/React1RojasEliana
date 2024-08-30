
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import CartContextProvider  from './Context/CartContext';
import Cart from'./components/Cart/Cart.jsx';
import Error404 from "./components/Error404/Error404.jsx";
import Layout from './components/Layout/Layout.jsx';



function App() {

return (
<CartContextProvider>

<BrowserRouter>



<Layout>
<Routes>
<Route path= '/'element={<ItemListContainer />} />
<Route path='/category/:categoryId' element={<ItemListContainer />} />
<Route path='/products/:id' element={<ItemDetailContainer />}/>
<Route path='/Cart' element={<Cart />}/>
<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
<Route path='*' element={<Error404 />}/>



</Routes>
<ItemCount initial={0} stock={10} onAdd={(quantity) => console.log ('cantidad agregada', quantity)}/>
</Layout>

</BrowserRouter>
</CartContextProvider>









);
}

export default App;
