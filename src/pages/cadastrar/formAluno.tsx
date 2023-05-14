import styles from '../../components/formulario/Formulario.module.scss';
import button from '../../components/formulario/button/Button.module.scss';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from 'components/formulario/input';
import Button from 'components/formulario/button';
import FormData from 'Interfaces/FormData';
import style from '../../components/formulario/input/Input.module.scss';
import classnames from 'classnames';
import axios from 'axios';
import AlunoData from 'Interfaces/AlunoData';

export default function FormAluno() {
    const schema2 = yup.object({
        nome: yup.string().required("Campo obrigatório"),
        turma: yup.string().required("Campo obrigatório"),
        matricula: yup.number().required("Campo obrigatório").positive().integer(),
    }).required();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        mode: 'onChange',
        resolver: yupResolver(schema2),

    });

    function onSubmit(data: AlunoData) {
        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            url: 'http://localhost:8080/alunos'
        })
            .then(response => console.log(response))
            .catch(errors => console.log(errors))
        
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
            <fieldset className={styles.form__field}>
                <Input register={register} label='nome' ph='Informe o nome' type="text" error={errors.nome ? true : false} />
                <span className={styles.form__field__errorMessage}>{errors.nome?.message}</span>
                <Input register={register} label="turma" ph='Informe o turma' type="text" error={errors.turma ? true : false} />
                <span className={styles.form__field__errorMessage}>{errors.turma?.message}</span>
                <Input register={register} label="matricula" ph='Informe o matricula' type="number" error={errors.matricula ? true : false} />
                <span className={styles.form__field__errorMessage}>{errors.matricula?.message}</span>

                <Button value="Cadastrar" />
            </fieldset>
        </form>
    )
}