import Formulario from "../../components/formulario/formulario";
import style from '.././emprestar/Emprestar.module.scss';

export default function Cadastrar(){
    let placeHolder = {
        ph1:"Id do Livro",
        ph2:"Titulo do Livro",
        ph3:"Informe o autor",
        ph4:"Editora",
        ph5:"",
    };
    return(
        <section className={style.container}>
            <h1>Cadastrar Livro</h1>
            <Formulario placeHolder={placeHolder}/>
        </section>
    )
}