import Cabecalho from "../../components/cabecalho";
import Footer from "../../components/footer/footer";
import Formulario from "../../components/formulario/formulario";

export default function(){
    return(
        <>
            <Cabecalho ativo="cadastrar"/>
            <Formulario />
            <Footer/>
        </>
    )
}