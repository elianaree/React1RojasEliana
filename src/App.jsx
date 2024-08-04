
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';




function App() {

return (
<div className= "App">
<BrowserRouter>
<NavBar/>

<Routes>

            <Route path= '/'element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/hidroterapia' element={<ItemDetailContainer />} />
            <Route path='/masajes' element={<ItemDetailContainer />} />
            <Route path='/belleza' element={<ItemDetailContainer />} />
            <Route path= '/CartWidget' element={<CartWidget />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
</Routes>

<ItemDetailContainer/>
</BrowserRouter>
<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ('cantidad agregada', quantity)}/>
</div>
);
}

export default App;
