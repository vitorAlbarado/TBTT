import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/home";
import Emprestar from "../emprestar/emprestar";
import Cadastrar from "../cadastrar/cadastrar";
import Acervo from "../acervo/acervo";
import Historico from "../historico/historico";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/emprestar" element={<Emprestar/>}/>
                <Route path="/cadastrar" element={<Cadastrar/>}/>
                <Route path="/acervo" element={<Acervo/>}/>
                <Route path="/historico" element={<Historico/>}/>
            </Routes>
        </BrowserRouter>
    )
}