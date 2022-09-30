import   './cabecalho.css'
import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";

interface Props{
	ativo?:string
}
export default function Cabecalho(porps:Props){

    return(
        <header>
			<section className='cabecalho'>
			<h1><a href="#"><img src={logo} style={{width:"150px"}} alt="Logo da Empresa"/></a></h1>
				<nav className='menu'>
					<ul>
						<li><Link to="/" id={porps.ativo ==='home' ? porps.ativo:''}>Home</Link></li>
						<li><Link to="/emprestar" id={porps.ativo ==='emprestar' ? porps.ativo:''}>Emprestar</Link></li>						
						<li><Link to="/cadastrar" id={porps.ativo ==='cadastrar' ? porps.ativo:''}>Cadastrar</Link></li>
						<li><Link to="/acervo" id={porps.ativo ==='acervo' ? porps.ativo:''}>Acervo</Link></li>
						<li><Link to="/historico"id={porps.ativo ==='historico' ? porps.ativo:''}>Historico</Link></li>
					</ul>
				</nav>
			</section>
		</header>
    );
}