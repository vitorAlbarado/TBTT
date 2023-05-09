import styles from './Acervo.module.scss';
import axios from 'axios';

import { useEffect, useState } from 'react';

import { type } from 'os';

type ILivros ={
	titulo?:string,
	autor?:string,
	genero?:string,
  }

export default function Acervo() {
	const [acervo, setAcervo] = useState<ILivros[]>([]);
	const [busca, setBusca] = useState(false);

	 function buscaLivros(){
			axios.get('http://localhost:8080/livros')
			.then(resposta => setAcervo(resposta.data.content))
			.catch(() => alert("Não foi possivel buscar os dados"))
		}
		
		

	return (
		<section className={styles.container}>
			<input className={styles.container__input}  id="pesquisar__input" type="text" placeholder="Informe o ID" />
			<button className={styles.container__pesquisar} type="submit" onClick={()=>buscaLivros()}>Pesquisar</button>
			<table className={styles.container__tabela}>
				<thead className={styles.container__tabela__thead}>

					<tr>
						<th >Titulo Livro</th>
						<th >Autor</th>
						<th >Genero</th>
					</tr>
				</thead>
				<tbody className="tabela-historico__body">
				    {acervo.map((item, index) => <tr key={index}>
						<td>{item.titulo}</td>
						<td>{item.autor}</td>
						<td>{item.genero}</td>
					</tr>
					)}
				</tbody>
			</table>
		</section>
	)
}