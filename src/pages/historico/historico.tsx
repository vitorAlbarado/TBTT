import axios from 'axios';
import IEmprestimos from 'Interfaces/IEmprestimos';
import { useEffect, useState } from 'react';
import styles from '../acervo/Acervo.module.scss';

export default function Historico() {
	const [emprestimos, setEmprestimos] = useState<IEmprestimos[]>([])

	useEffect(() => {
		axios.get<IEmprestimos[]>('https://jsonurl.com/_sO2')
			.then((resposta) => {
				setEmprestimos(resposta.data)
			})
	}, [])

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
						<td>{item.matriculaAluno}</td>
						<td>{item.nomeAluno}</td>
						<td>{item.turmaAluno}</td>
						<td>{item.idLivro}</td>
						<td>{item.tituloLivro}</td>
					</tr>)}
				</tbody>
			</table>
		</section>
	)
}