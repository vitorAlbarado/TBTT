import styles from '../../components/formulario/Formulario.module.scss';
import style from '../../components/formulario/input/Input.module.scss';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'components/formulario/button';
import FormData from 'Interfaces/FormData';
import classnames from 'classnames';
import axios from 'axios';

export default function Emprestar(){
    const schema = yup.object({
        idAluno: yup.number().positive("Número inválido").integer("Número inválido").required("Campo obrigatório"),
        nomeAluno: yup.string(),
        idLivro: yup.string().required("Campo obrigatório"),
        tituloLivro: yup.string()
      }).required();

    type Emprestimo = {
        idAluno:number,
        idLivro:number,
        data:Date,
        prazo:number,

    }  
    const {register, handleSubmit, reset, formState:{errors}} = useForm<Emprestimo>({
        mode:'onChange',
        resolver: yupResolver(schema),
        
    });
    function onSubmit (data:Emprestimo){
       
        data.data = new Date()

        axios({
            method:'POST',
            headers:{'content-type': 'application/json'},
            data:JSON.stringify(data),
            url:'http://localhost:8080/emprestimos'
        })
        .then(reponse => console.log(reponse.data))
        .catch(error => console.log(error.response.data.message))
        console.log(data)
        
    }

    return(

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={styles.form__field}>
                <div className={style.form}>
                <input 
                    className={classnames({
                        [style.form__input]:true,
                        [style.form__input__error]:errors.idAluno?.message
                    })}
                    {...register("idAluno")}
                    placeholder="Informe a matrícula do Aluno"
                    type='text'
                    />
                <input className={style.form__input} type="text"placeholder='Nome do Aluno' />
                </div>
                <span className={styles.form__field__errorMessage}>{errors.idAluno?.message}</span>

                <div className={style.form}>
                <input 
                    className={classnames({
                        [style.form__input]:true,
                        [style.form__input__error]:errors.idLivro?.message
                    })}
                    {...register("idLivro")}
                    placeholder="Informe o código do Livro"
                    type='text'
                    />
                    <input className={style.form__input} type="text"placeholder='Título do livro' />
                </div>
                <span className={styles.form__field__errorMessage}>{errors.idLivro?.message}</span>

                <div className={style.form}>
                <input 
                    className={classnames({
                        [style.form__input]:true,
                        [style.form__input__error]:errors.idLivro?.message
                    })}
                    {...register("prazo")}
                    placeholder="Informe o prazo"
                    type='text'
                    />
                    
                </div>

                
                <Button value="Emprestar"/>
            </fieldset>
        </form>
    )
}