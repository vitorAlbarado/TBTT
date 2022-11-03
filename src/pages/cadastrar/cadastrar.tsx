import styles from '../../components/formulario/Formulario.module.scss';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from 'components/formulario/input';
import Button from 'components/formulario/button';
import ILivros from 'Interfaces/ILivros';
import IEmprestimos from 'Interfaces/IEmprestimos';

export default function Cadastrar(){
    const schema = yup.object({
        idLivro: yup.string().required("Campo obrigatório"),
        tituloLivro: yup.string(),
        editora: yup.string(),
        dataLancamento: yup.date().required("Campo obrigatório"),
        autor: yup.string().required("Campo obrigatório"),
      }).required();

    

    const {register, handleSubmit, reset, formState:{errors}} = useForm<IEmprestimos>({
        mode:'onChange',
        resolver: yupResolver(schema),
        
    });
    function onSubmit (data:ILivros){
        reset();
        console.log(data);
    }
    
    return(
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={styles.form__field}>

                <Input register={register} label="idLivro" ph='Informe o id do livro' type="number" error={errors.idLivro ? true:false}/>
                <span className={styles.form__field__errorMessage}>{errors.idLivro?.message}</span>

                <Input register={register} label="tituloLivro" ph='Informe o titulo' type="text" error={errors.tituloLivro ? true:false}/>
                    <span className={styles.form__field__errorMessage}>{errors.tituloLivro?.message}</span>

                <Input register={register} label="editora" ph='Informe a editora' type="text" error={errors.editora ? true:false}/>
                    <span className={styles.form__field__errorMessage}>{errors.editora?.message}</span>
                    
                <Input register={register} label="dataLancamento" ph='' type="date" error={errors.dataLancamento ? true:false}/>
                    <span className={styles.form__field__errorMessage}>{errors.dataLancamento?.message}</span>

                <Input register={register} label="autor" ph='Informe o autor' type="text" error={errors.autor ? true:false}/>
                    <span className={styles.form__field__errorMessage}>{errors.autor?.message}</span>
                <Button value="Cadastrar"/>
            </fieldset>
        </form>
    )
}