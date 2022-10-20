import Formulario from "../../components/formulario/formulario";
import style from './Emprestar.module.scss';

export default function Emprestar(){
    let placeHolder = {
        ph1:"Matricula do Aluno",
        ph2:"Nome",
        ph3:"Turma",
        ph4:"Id do livro",
        ph5:"Titulo do Livro",
    };
    return(
            <section className={style.container}>
                <h1>Emprestar Livro</h1>
                <Formulario placeHolder={placeHolder}/>
            </section>
    )
}