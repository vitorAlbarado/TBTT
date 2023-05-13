import styles from './Acervo.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Table from 'react-bootstrap/esm/Table';

type ILivros = {
	titulo?: string,
	autor?: string,
	genero?: string,
}

export default function Acervo() {
	const [acervo, setAcervo] = useState<ILivros[]>([]);
	const [page, setPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0)
	const [active, setActive] = useState(0);
	let items = [];



	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get('http://localhost:8080/livros', {
				params: {
					page: page
				}
			});
			setAcervo(response.data.content);
			setTotalPages(response.data.totalPages);
			setActive(response.data.pageable.pageNumber);
			console.log(response);
			console.log(response.data.totalPages)
			console.log(active)

		};
		fetchData();
	}, [page]);

	for (let number = 0; number < 3; number++) {
		items.push(
		  <Pagination.Item key={number} active={number === active} onClick={()=>setPage(number)}>
			{number+1}
		  </Pagination.Item>,
		);
	  }
	return (
		<section className={styles.container}>
			<div className={styles.container__pesquisar}>
				<input id="pesquisar__input" type="text" placeholder="Informe o ID" />
				<button className={styles.container__pesquisar__button} type="submit">Buscar</button>
			</div>
			<Table striped bordered hover size='sm' className={styles.container__table}>
				<thead className={styles.container__thead}>
					<tr>
						<th>Título</th>
						<th >Autor</th>
						<th >Gênero</th>	
						<th >Status</th>
					</tr>
				</thead>
				<tbody className={styles.container__table__tbody}>
					{acervo.map((item, index) => <tr key={index}>
						<td>{item.titulo}</td>
						<td>{item.autor}</td>
						<td>{item.genero}</td>
						<td>-</td>
					</tr>
					)}
				</tbody>
			</Table>
			<div className={styles.container_pagination}>
				<Pagination>{items}</Pagination>
			</div>
		</section>
	)
}