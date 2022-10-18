import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './formulario.css'


const schema = yup.object({
    matriculaAluno: yup.number().required("Informe a matricula"),
    nomeAluno:yup.string().required("Informe o nome"),
    turmaAluno:yup.string().required("Informe a turma"),
    idLivro:yup.string().required("Id do livro obrigatorio"),
    tituloLivro:yup.string()
}).required();


interface Props{
    matriculaAluno?:string,
    nomeAluno?:string,
    turmaAluno?:string;
    idLivro?:number,
    tituloLivro?:string,
    label1?:string,
    label2?:string,
    label3?:string,
    label5?:string,
    label4?:string,
    type?:string,
    placeholder?:string
    name?:string

}

export default function Formulario(props:Props){
    const {register, handleSubmit, watch, formState:{errors}} = useForm<Props>({
        resolver: yupResolver(schema)
      });
    function criaEmprestimos(emprestimo:Props){
        console.log(emprestimo)
    }
    return (
        <form className="container--form" onSubmit={handleSubmit(criaEmprestimos)}>
			    <fieldset className="container__form">
                    <div className="container__form--input">
                        <label className="">{props.label1}</label>
                        <input className="form__input" type="text" placeholder="" {...register("matriculaAluno", {required:true})}/>
                        <span style={{color:"red"}}>{errors.matriculaAluno?.message}</span>
                    </div>
                    <div className="container__form--input">
                        <label>{props.label2}</label>
                        <input className="form__input" type="text" placeholder="Nome do aluno" {...register("nomeAluno",{required:true})}  />
                        <span style={{color:"red"}}>{errors.nomeAluno?.message}</span>
                    </div>
                    <div className="container__form--input">
                        <label>{props.label3}</label>
                        <input className="form__input" type="text" placeholder="Turma do aluno" {...register("turmaAluno")} />
                        <span style={{color:"red"}}>{errors.turmaAluno?.message}</span>
                    </div>
                    <div className="container__form--input">
                        <label>{props.label4}</label>
                        <input className="form__input" type="text" placeholder="ID Livro" {...register("idLivro")} />
                        <span style={{color:"red"}}>{errors.idLivro?.message}</span>
                    </div>
                    <div className="container__form--input">
                        <label>{props.label5}</label>
                        <input className="form__input" type="text"  placeholder="Titulo do Livro" {...register("tituloLivro")} />
                        <span style={{color:"red"}}>{errors.tituloLivro?.message}</span>
                    </div> 
				    <input id="input-emprestar"  
                     type="submit" 
                     value="Emprestar"
                    />
			    </fieldset>
		    </form>
    )
}