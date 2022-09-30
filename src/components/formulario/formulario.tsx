import './formulario.css'
interface Props{
    label1:string;
    label2:string;
    label3:string;
    label4:string;
    label5:string;
}
export default function Formulario(props:Props){
    
    return (
        <form className="container--form">
			    <fieldset className="container__form">
                    <div className="container__form--input">
                        <label className="">{props.label1}</label>
                        <input className="form__input" type="text" placeholder="Matricula aluno" name="matriculaAluno"/>
                    </div>
                    <div className="container__form--input">
                        <label>{props.label2}</label>
                        <input className="form__input" type="text" placeholder="Nome do aluno" name="nomeAluno"  />
                    </div>
                    <div className="container__form--input">
                        <label>{props.label3}</label>
                        <input className="form__input" type="text" placeholder="Turma do aluno" name="turmaAluno" />
                    </div>
                    <div className="container__form--input">
                        <label>{props.label4}</label>
                        <input className="form__input" type="text" placeholder="ID Livro" name="idLivro" />
                    </div>
                    <div className="container__form--input">
                        <label>{props.label5}</label>
                        <input className="form__input" type="text"  placeholder="Titulo do Livro" id="tituloLivro" />
                    </div>
				    <input id="input-emprestar"  
                     type="submit" 
                     value="Emprestar"
                    />
			    </fieldset>
		    </form>
    )
}