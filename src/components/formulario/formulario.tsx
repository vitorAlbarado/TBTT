export function de(){
    return(<></>)
}
// import {useForm, SubmitHandler} from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
// import styles from './Formulario.module.scss';
// import Input from './input';
// import Button from './button';



// type Props = {
//     children: React.ReactNode;
// }
// type Dados={
//     inputElement?:any
//     // input:{
//     //     name1:string,
//     //     ph1:string,
//     //     name2:string,
//     //     ph2:string,
//     //     name3:string,
//     //     ph3:string,
//     //     name4:string,
//     //     ph4:string,
//     //     name5:string,
//     //     ph5:string,
//     //     typeText:string,
//     // }
// }

// export default function Formulario ({children}:Props){
//     const {register, handleSubmit, formState:{errors}} = useForm<Dados>();
//     const onSubmit: SubmitHandler<Dados> = data => console.log(data);
//     return (
//         <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
//             <fieldset className={styles.form__field}>
//                 <Input inputName={input.name1} ph={input.ph1} typeText={input.typeText} register={register}/>
//             </fieldset>
// 		</form>
        
//     )
// }