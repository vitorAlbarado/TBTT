import styles from './Input.module.scss';
import {UseFormRegister, Path} from 'react-hook-form';
import classnames from 'classnames';

interface Dados {
    idAluno?:number,
    name?:string,
    idLivro?:string,
    turmaAluno?:string,
    tituloLivro?:string, 
    editora?:string, 
    autor?:string, 
    dataLancamento?:Date, 
}
type InputTypes = {
    label:Path<Dados>;
    ph:string,
    type:string,
    register:UseFormRegister<Dados>,
    error?:boolean,
}

export default function Input({register, label, ph , type,error}:InputTypes){
    return(
        <div className={styles.form}>
            <input 
                className={classnames({
                    [styles.form__input]:true,
                    [styles.form__input__error]:error
                })}
                {...register(label)}
                placeholder={ph}
                type={type}
            />
        </div>
    );
}