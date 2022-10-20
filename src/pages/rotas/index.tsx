import { BrowserRouter, Routes, Route } from "react-router-dom";
import Emprestar from "../emprestar/emprestar";
import Cadastrar from "../cadastrar/cadastrar";
import Acervo from "../acervo/acervo";
import Historico from "../historico/historico";
import Home from "pages/home/home";
import Cabecalho from "components/cabecalho";
import Footer from "components/footer/footer";
import PaginaPadrao from "pages/paginaPadrao/paginaPadrao";

export default function Rotas(){
    return(
        // <main className="MainContainer">
        // <BrowserRouter>
        // <Cabecalho />
        //     <Routes>
        //         <Route path="/" element={<Home/>} />
        //         <Route path="/emprestar" element={<Emprestar/>}/>
        //         <Route path="/cadastrar" element={<Cadastrar/>}/>
        //         <Route path="/acervo" element={<Acervo/>}/>
        //         <Route path="/historico" element={<Historico/>}/>
        //     </Routes>
        //     <Footer/>
        // </BrowserRouter>
        // </main>
        <main className="MainContainer">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao/>}>
                    <Route index element={<Home/>} />
                <Route path="/emprestar" element={<Emprestar/>}/>
                <Route path="/cadastrar" element={<Cadastrar/>}/>
                <Route path="/acervo" element={<Acervo/>}/>
                <Route path="/historico" element={<Historico/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </main>
    )
}