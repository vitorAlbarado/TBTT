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

export default function Cadastrar() {
    const schema2 = yup.object({
        titulo: yup.string(),
        autor: yup.string().required("Campo obrigatório"),
        genero: yup.string(),
    }).required();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        mode: 'onChange',
        resolver: yupResolver(schema2),

    });

    function onSubmit(data: FormData) {

        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            url: 'http://localhost:8080/livros'
        })
            .then(response => console.log(response.data))
            .catch(errors => console.log(errors.response.data.message))
        reset();
    }


    return (
        <section className={styles.container}>
            <div className={styles.botoesDeSelecao}>
                <button className={button.button}>Aluno</button>
                <button className={button.button}>Livro</button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} >
                <fieldset className={styles.form__field}>

                    <Input register={register} label='titulo' ph='Informe o titulo' type="text" error={errors.titulo ? true : false} />
                    <span className={styles.form__field__errorMessage}>{errors.titulo?.message}</span>

                    <Input register={register} label="autor" ph='Informe o autor' type="text" error={errors.autor ? true : false} />
                    <span className={styles.form__field__errorMessage}>{errors.autor?.message}</span>


                    <div className={style.form}>
                        <select className={classnames({
                            [style.form__input]: true,
                            [style.form__input__error]: errors.idAluno?.message
                        })}
                            {...register("genero")}
                        >
                            <option value="">Escolha o genero</option>
                            <option value="TERROR">TERROR</option>
                            <option value="FICÇÃO">FICÇÃO</option>
                            <option value="DRAMA">DRAMA</option>
                            <option value="SUSPENSE">SUSPENSE</option>
                            <option value="AVENTURA">AVENTURA</option>
                            <option value="ROMANCE">ROMANCE</option>

                        </select>
                    </div>
                    <Button value="Cadastrar" />
                </fieldset>
            </form>
        </section>
    )
}