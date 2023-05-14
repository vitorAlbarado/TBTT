import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../acervo/Acervo.module.scss';
import { type } from 'os';

type IEmprestimos = {
    idAluno?:number,
    idLivro?:number,
    data?:Date,
    prazo?:number
  }

export default function Histotico() {
	const [emprestimos, setEmprestimos] = useState<IEmprestimos[]>([]);
	const [busca, setBusca] = useState(false);

	 function buscaLivros(){
			axios.get('http://localhost:8080/livros')
			.then(resposta => setEmprestimos(resposta.data.content))
			.catch(() => alert("Não foi possivel buscar os dados"))
		}

	return (
		<section className={styles.container}>
			<input className={styles.container__input} id="pesquisar__input" type="text" placeholder="Informe o ID" />
			<input className={styles.container__pesquisar} type="submit" value="Pesquisar" />
			<table className={styles.container__tabela}>
				<thead className={styles.container__tabela__thead}>
					<tr>
						<th >Matricula</th>
						<th >Aluno</th>
						<th >Turma</th>
						<th >ID Livro</th>
						<th >Titulo</th>
					</tr>
				</thead>
				<tbody className="tabela-historico__body">
					{emprestimos.map((item, index) => <tr key={index}>
						{/*<td>{item.idAluno}</td>*/}
						
						
						<td>{item.idLivro}</td>
						
					</tr>)}
				</tbody>
			</table>
		</section>
	)
}