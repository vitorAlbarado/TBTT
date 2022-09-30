import Cabecalho from "../../components/cabecalho"
import Footer from "../../components/footer/footer"
import Formulario from "../../components/formulario/formulario"
import './emprestar.css'
export default function Emprestar(){
    return(
        <>
            <Cabecalho ativo="emprestar"/>
            <Formulario label1="Matriculca" label2="Nome" label3="Turma" label4="Id livro" label5="Titulo"/>
            <Footer/>
        </>
    )
}