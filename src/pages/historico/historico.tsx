import Cabecalho from '../../components/cabecalho'
import Footer from '../../components/footer/footer'
import '../acervo/acervo.css'
export default function Historico(){
    return(
        <>
        <Cabecalho ativo='historico'/>
            <section className="container-historico">
		        <input className="form__input" id="pesquisar__input" type="text" placeholder="Informe o ID"/>
		        <input className="input-pesquisar" type="submit" value="Pesquisar"/>
		        <table className="tabela-historico">
			        <thead className="tabela-historico__thead">
                        <th >Data</th>
                        <th >RA Aluno</th>
                        <th >Aluno</th>
                        <th >Id Livro</th>
                        <th >Livro</th>
			        </thead>
			    <tbody className="tabela-historico__body">
				<tr>
					<td>texto</td>
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