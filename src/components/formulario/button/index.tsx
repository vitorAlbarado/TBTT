import styles from './Button.module.scss';
type value ={
    value:string
}
export default function Button({value}:value){

    return(
        <button type='submit' className={styles.button}  >{value}</button>
    );
}