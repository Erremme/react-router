import { BrowserRouter, Routes, Route } from "react-router-dom";
//Layout
import DefaulLayout from "./page/DefaultLayout";
//Pages
import HomePage from "./page/HomePage";
import Prodotti from "./page/Prodotti";
import Prodotto from "./page/Prodotto";
import ChiSiamo from "./page/ChiSiamo";

export default function App(){
 return(
  <BrowserRouter>
    <Routes>
      <Route element ={<DefaulLayout />}>
        <Route index element = {<HomePage />}/>
        <Route path="/Prodotti"  element= {<Prodotti />}/>
        <Route path="/Prodotti/:id" element={<Prodotto />} />
        <Route path="ChiSiamo" element={<ChiSiamo />}/>
        
      </Route>
    </Routes>
  </BrowserRouter>
 )
}