import styles from '../../components/formulario/Formulario.module.scss';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from 'components/formulario/input';
import Button from 'components/formulario/button';
import IEmprestimos from 'Interfaces/IEmprestimos';

export default function Emprestar(){
    const schema = yup.object({
        matriculaAluno: yup.number().positive("Número inválido").integer("Número inválido").required("Campo obrigatório"),
        nomeAluno: yup.string().required("Campo obrigatório"),
        turmaAluno: yup.string().required("Campo obrigatório"),
        idLivro: yup.string().required("Campo obrigatório"),
        tituloLivro: yup.string()
      }).required();

    const {register, handleSubmit, reset, formState:{errors}} = useForm<IEmprestimos>({
        mode:'onChange',
        resolver: yupResolver(schema),
        
    });
    function onSubmit (data:IEmprestimos){
        console.log(data);
        reset();
    }

    return(

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={styles.form__field}>
                <Input register={register} label="matriculaAluno" ph='Informe o id do aluno' type="text" error={errors.matriculaAluno ? true:false}/>
                <span className={styles.form__field__errorMessage}>{errors.matriculaAluno?.message}</span>

                <Input register={register} label="nomeAluno" ph='Informe o nome do aluno' type="text" error={errors.nomeAluno ? true:false}/>
                    <span className={styles.form__field__errorMessage}>{errors.nomeAluno?.message}</span>

                <Input register={register} label="turmaAluno" ph='Informe a turma do aluno' type="text" error={errors.turmaAluno ? true:false}/>
                    <span className={styles.form__field__errorMessage}>{errors.turmaAluno?.message}</span>
                    
                <Input register={register} label="idLivro" ph='Informe o id do livro' type="text" error={errors.idLivro ? true:false}/>
                    <span className={styles.form__field__errorMessage}>{errors.idLivro?.message}</span>

                <Input register={register} label="tituloLivro" ph='Informe o titulo do livro' type="text" error={errors.tituloLivro ? true:false}/>
                    <span className={styles.form__field__errorMessage}>{errors.tituloLivro?.message}</span>
                <Button value="Emprestar"/>
            </fieldset>
        </form>
    )
}