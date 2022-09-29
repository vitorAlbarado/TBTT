import   './cabecalho.css'
import logo from '../../assets/img/logo.png'

export default function Cabecalho(){
	
    return(
        <header>
			<section className='cabecalho'>
			<h1><a href="#"><img src={logo} style={{width:"150px"}} alt="Logo da Empresa"/></a></h1>
				<nav className='menu'>
					<ul>
						<li><a href="../home.html">Home</a></li>
						<li><a href="./emprestar.html" id="emprestar">Emprestar</a></li>
						<li><a href="./cadastrar.html">Cadastrar</a></li>
						<li><a href="./acervo.html">Acervo</a></li>
						<li><a href="./historico.html">Historico</a></li>
					</ul>
				</nav>
			</section>
		</header>
    );
}