import style from '.cabecalho.module.scss';

export default function Cabecalho(){
    return(
        <header>
			<section className={style.cabecalho}>
				<nav className={style.menu}>
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