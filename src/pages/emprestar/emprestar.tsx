import styles from '../../components/formulario/Formulario.module.scss';
import style from '../../components/formulario/input/Input.module.scss';
import modal from './Emprestar.module.scss';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'components/formulario/button';
import classnames from 'classnames';
import axios from 'axios';
import { Alert, Modal } from 'react-bootstrap';
import { useState } from 'react';

export default function Emprestar() {
  const [showAlert, setShowAlert] = useState(false);
  const [erro, setErro] = useState('');
  const [status, setStatus] = useState<any>();
  const schema = yup.object({
    idAluno: yup.number().positive("Número inválido").integer("Número inválido").required("Campo obrigatório"),
    nomeAluno: yup.string(),
    idLivro: yup.string().required("Campo obrigatório"),
    tituloLivro: yup.string(),
    prazo: yup.number().positive("Número inválido").integer("Número inválido").required("Campo obrigatório").min(1,"Prazo minimo 1 dia").max(60,"Prazo maximo 60 dias")
  }).required();

  type Emprestimo = {
    idAluno: number,
    idLivro: number,
    data: Date,
    prazo: number,

  }
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Emprestimo>({
    mode: 'onChange',
    resolver: yupResolver(schema),

  });
  function onSubmit(data: Emprestimo) {

    data.data = new Date()
    console.log(new Date())
    axios({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: JSON.stringify(data),
      url: 'http://localhost:8080/emprestimos'
    })
      .then((response) => {
        console.log(response.data)
        setStatus(response.status)
        setErro(response.data)
        reset();
      })
      .catch((error) => {
        setShowAlert(true)
        console.log(error)
        setStatus(error.code)
        setErro(error.response.data.message);
      })
      
  }

  return (

    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.form__field}>
        <div className={style.form}>
          <input
            className={classnames({
              [style.form__input]: true,
              [style.form__input__error]: errors.idAluno?.message
            })}
            {...register("idAluno")}
            placeholder="Informe a matrícula do Aluno"
            type='text'
          />
          <input className={style.form__input} type="text" placeholder='Nome do Aluno' />
        </div>
        <span className={styles.form__field__errorMessage}>{errors.idAluno?.message}</span>

        <div className={style.form}>
          <input
            className={classnames({
              [style.form__input]: true,
              [style.form__input__error]: errors.idLivro?.message
            })}
            {...register("idLivro")}
            placeholder="Informe o código do Livro"
            type='text'
          />
          <input className={style.form__input} type="text" placeholder='Título do livro' />
        </div>
        <span className={styles.form__field__errorMessage}>{errors.idLivro?.message}</span>

        <div className={style.form}>
          <input
            className={classnames({
              [style.form__input]: true,
              [style.form__input__error]: errors.idLivro?.message
            })}
            {...register("prazo")}
            placeholder="Informe o prazo"
            type='text'
          />
          <span className={styles.form__field__errorMessage}>{errors.prazo?.message}</span>

        </div>
        
        <Button value="Emprestar" />
        <Modal
          size="sm"
          show={showAlert}
          onHide={() => setShowAlert(false)}
          aria-labelledby="example-modal-sizes-title-sm"
          contentClassName={modal.modal}

        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              {status}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{erro}</Modal.Body>
        </Modal>


      </fieldset>
    </form>
  )
}