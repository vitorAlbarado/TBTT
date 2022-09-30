import Cabecalho from '../../components/cabecalho'
import Footer from '../../components/footer/footer'
import './acervo.css'
export default function Acervo(){
    return (
        <>
        <Cabecalho ativo="acervo"/>
        <section className="container-historico">
		    <input className="form__input" id="pesquisar__input" type="text" placeholder="Informe o ID"/>
		    <input className="input-pesquisar" type="submit" value="Pesquisar"/>
		<table className="tabela-historico">
			<thead className="tabela-historico__thead">
					<th >ID Livro</th>
					<th >Titulo Livro</th>
					<th >Autor</th>
					<th >Editora</th>
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
    <Footer/>
        </>
    )
}