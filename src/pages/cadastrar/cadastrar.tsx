import Cabecalho from "../../components/cabecalho";
import Footer from "../../components/footer/footer";
import Formulario from "../../components/formulario/formulario";

export default function(){
    return(
        <>
            <Cabecalho ativo="cadastrar"/>
            <Formulario label1="Id Livro" label2="Titulo" label3="Autor" label4="Editora" label5="Data lançamento"/>
            <Footer/>
        </>
    )
}