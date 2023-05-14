import { useState } from 'react';
import styles from '../../components/formulario/Formulario.module.scss';
import button from '../../components/formulario/button/Button.module.scss';
import FormLivro from './formLivro';
import classNames from 'classnames';
import FormAluno from './formAluno';


export default function Cadastrar() {
    const [form, setForm] = useState("livro")
    return (
        <section className={styles.container}>
            <div className={styles.botoesDeSelecao}>

                <button className={classNames({
                    [button.button]: true,
                    [button.active]: form === 'livro'
                })}
                    key='livro' onClick={() => setForm('livro')}>Livro</button>

                <button className={classNames({
                    [button.button]: true,
                    [button.active]: form === 'aluno'
                })} key='aluno' onClick={() => setForm('aluno')}>Aluno</button>

            </div>
            {form === 'livro' ? <FormLivro /> : <FormAluno/>}
        </section>
    )
}