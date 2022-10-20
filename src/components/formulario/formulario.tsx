import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from './Formulario.module.scss';


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
    const {register, handleSubmit, formState:{errors}} = useForm<Props>({
        resolver: yupResolver(schema)
      });
    function criaEmprestimos(emprestimo:Props){
        console.log(emprestimo)
    }
    return (
        <form className={styles.form} onSubmit={handleSubmit(criaEmprestimos)}>
            <fieldset className={styles.form__field}>
                <div className={styles.form__field__box}>
                    <label className="">{props.label1}</label>
                    <input className={styles.form__field__box__input} type="text" placeholder="" {...register("matriculaAluno", {required:true})}/>
                    <span style={{color:"red"}}>{errors.matriculaAluno?.message}</span>
                </div>
                <div className={styles.form__field__box}>
                    <label>{props.label2}</label>
                    <input className={styles.form__field__box__input} type="text" placeholder="" {...register("nomeAluno",{required:true})}  />
                    <span style={{color:"red"}}>{errors.nomeAluno?.message}</span>
                </div>
                <div className={styles.form__field__box}>
                    <label>{props.label3}</label>
                    <input className={styles.form__field__box__input} type="text" placeholder="" {...register("turmaAluno")} />
                    <span style={{color:"red"}}>{errors.turmaAluno?.message}</span>
                </div>
                <div className={styles.form__field__box}>
                    <label>{props.label4}</label>
                    <input className={styles.form__field__box__input} type="text" placeholder="" {...register("idLivro")} />
                    <span style={{color:"red"}}>{errors.idLivro?.message}</span>
                </div>
                <div className={styles.form__field__box}>
                    <label>{props.label5}</label>
                    <input className={styles.form__field__box__input} type="text"  placeholder="" {...register("tituloLivro")} />
                    <span style={{color:"red"}}>{errors.tituloLivro?.message}</span>
                </div> 
                <input 
                    className={styles.form__field__input}  
                    type="submit" 
                    value="Emprestar"
                />
            </fieldset>
		</form>
    )
}