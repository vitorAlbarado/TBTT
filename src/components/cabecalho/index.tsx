import style from './Cabecalho.module.scss';
import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";

interface Props{
	ativo?:string
}
export default function Cabecalho(porps:Props){

    return(
        <header className={style.header}>
			<section className={style.header__cabecalho}>
			<h1><a href="#"><img src={logo} style={{width:"150px"}} alt="Logo da Empresa"/></a></h1>
				<nav className={style.menu}>
					<ul className={style.menu__list}>
						<li className={style.menu__link}><Link to="/" id={porps.ativo ==='home' ? porps.ativo:''}>Home</Link></li>
						<li className={style.menu__link}><Link to="/emprestar" id={porps.ativo ==='emprestar' ? porps.ativo:''}>Emprestar</Link></li>						
						<li className={style.menu__link}><Link to="/cadastrar" id={porps.ativo ==='cadastrar' ? porps.ativo:''}>Cadastrar</Link></li>
						<li className={style.menu__link}><Link to="/acervo" id={porps.ativo ==='acervo' ? porps.ativo:''}>Acervo</Link></li>
						<li className={style.menu__link}><Link to="/historico"id={porps.ativo ==='historico' ? porps.ativo:''}>Historico</Link></li>
					</ul>
				</nav>
			</section>
		</header>
    );
}