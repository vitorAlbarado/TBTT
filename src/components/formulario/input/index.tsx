import styles from './Input.module.scss';
import {UseFormRegister, Path} from 'react-hook-form';
import classnames from 'classnames';
import IEmprestimos from 'Interfaces/IEmprestimos';
import ILivros from 'Interfaces/ILivros';


interface InputTypes  {
    label:Path<IEmprestimos>,
    register:UseFormRegister<IEmprestimos>,
    ph:string,
    type:string,
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