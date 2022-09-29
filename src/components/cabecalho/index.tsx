import   './cabecalho.css'
import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";

export default function Cabecalho(){
    return(
        <header>
			<section className='cabecalho'>
			<h1><a href="#"><img src={logo} style={{width:"150px"}} alt="Logo da Empresa"/></a></h1>
				<nav className='menu'>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/emprestar" >Emprestar</Link></li>						
						<li><Link to="./cadastrar.html" >Cadastrar</Link></li>
						<li><Link to="./acervo.html" >Acervo</Link></li>
						<li><Link to="./historico.html">Historico</Link></li>
					</ul>
				</nav>
			</section>
		</header>
    );
}