import Cabecalho from "../../components/cabecalho"
import Footer from "../../components/footer/footer"
import Formulario from "../../components/formulario/formulario"
import styles from './Emprestar.module.scss';
export default function Emprestar(){
    return(
        <>
            <Cabecalho ativo="emprestar"/>
            <Formulario />
            <Footer/>
        </>
    )
}