import styles from './Acervo.module.scss';

export default function Acervo(){
    return (
        <section className={styles.container}>
		    <input className={styles.container__input} id="pesquisar__input" type="text" placeholder="Informe o ID"/>
		    <input className={styles.container__pesquisar} type="submit" value="Pesquisar"/>
			<table className={styles.container__tabela}>
				<thead className={styles.container__tabela__thead}>
						<tr>
						<th >ID Livro</th>
						<th >Titulo Livro</th>
						<th >Autor</th>
						<th >Editora</th>
						</tr>
				</thead>
				<tbody className="tabela-historico__body">
					<tr>
						<td>texto</td>
						<td>texto</td>
						<td>texto</td>
						<td>texto</td>
					</tr>
					<tr>
						<td>texto</td>
						<td>texto</td>
						<td>texto</td>
						<td>texto</td>
					</tr>
				</tbody>
			</table>
	</section>
    )
}