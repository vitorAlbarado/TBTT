import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/home";
import Emprestar from "../emprestar/emprestar";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/emprestar" element={<Emprestar/>}/>
            </Routes>
        </BrowserRouter>
    )
}