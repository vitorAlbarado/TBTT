import styles from './Acervo.module.scss';
import axios from 'axios';
import IEmprestimos from 'Interfaces/IEmprestimos';
import { useEffect, useState } from 'react';
import ILivros from 'Interfaces/ILivros';


export default function Acervo() {
	const [acervo, setAcervo] = useState<ILivros[]>([]);
	const [busca, setBusca] = useState(false);

	if(busca){
			axios.get<ILivros[]>('https://jsonurl.com/XUO1')
			.then(resposta => setAcervo(resposta.data))
			.catch(() => alert("Não foi possivel buscar os dados"))
	}

	

	return (
		<section className={styles.container}>
			<input className={styles.container__input}  id="pesquisar__input" type="text" placeholder="Informe o ID" />
			<button className={styles.container__pesquisar} type="submit" onClick={()=>setBusca(!busca)}>Pesquisar</button>
			<table className={styles.container__tabela}>
				<thead className={styles.container__tabela__thead}>

					<tr>
						<th >ID Livro</th>
						<th >Titulo Livro</th>
						<th >Editora</th>
						<th >Autor</th>
					</tr>
				</thead>
				<tbody className="tabela-historico__body">
					{acervo.map((item, index) => <tr key={index}>
						<td>{item.idLivro}</td>
						<td>{item.tituloLivro}</td>
						<td>{item.editora}</td>
						<td>{item.autor}</td>
					</tr>
					)}
				</tbody>
			</table>
		</section>
	)
}