import Badge from 'react-bootstrap/Badge';
import styles from './Jumbotron.module.scss';

export default function Jumbotron() {
    return(
            <section className={styles.jumbotron}>
                <div className="container">
                <h1 className="display-4">Mais de 10 mil empréstimos realizados</h1>
                <p className="lead">Acervo com mais de 25 mil livros das mais variadas áreas da educação disponiveis para todos os alunos. <br/>
                    Cadastre-se, escolha o livro e boa leitura!
                    </p>
                    <article className={styles.jumbotron__genero}>
                        <Badge bg="secondary">Biologia</Badge>{' '}
                        <Badge bg="secondary">Filosofia</Badge>{' '}
                        <Badge bg="secondary">Computação</Badge>{' '}
                        <Badge bg="secondary">Jornalismo</Badge>{' '}
                        <Badge bg="secondary">Saúde</Badge>{' '}
                        <Badge bg="secondary">Moda</Badge>{' '}
                    </article>
                </div>
            </section>
    )
}