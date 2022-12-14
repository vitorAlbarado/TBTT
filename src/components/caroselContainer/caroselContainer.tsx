import styles from './caroselContainer.module.scss';
import GuiaFrontEnd from '../../assets/img/Guia Front-end.png'
import ApacheKafka from '../../assets/img/ApacheKafka.png'
import javascript from '../../assets/img/Javascript.png'
import Lideranca from '../../assets/img/Liderança.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export interface livro {
    titulo: string,
    src:string,
    descricao: string,
    genero?:string,
    qtdEmprestimos: number
}
const Livro: Array<livro>=[
    {titulo: 'Guia Front End',
        src: GuiaFrontEnd,
        descricao: 'O melhor e mais completo guia de font-end do mercado do zero ao pro.',
        qtdEmprestimos: 5
    },
    {titulo: 'ApacheKafka',
        src: ApacheKafka,
        descricao: 'O melhor e mais completo guia de ApacheKafka do mercado do zero ao pro.',
        qtdEmprestimos: 9
    },
    {titulo: 'javascript',
        src: javascript,
        descricao: 'O melhor e mais completo guia de javascript do mercado do zero ao pro.',
        qtdEmprestimos: 3
    },
    {titulo: 'Lideranca',
        src: Lideranca,
        descricao: 'O melhor e mais completo guia de Lideranca do mercado do zero ao pro.',
        qtdEmprestimos: 6
    }
]


export default function CaroselContainer(){
    
    return(
        <section className={styles.caroselContainer}>
			<h2 className={styles.caroselContainer__titulo}>Mais Populares</h2>
			<section className={styles.caroselContainer__secoes}>
                {Livro.map((item, index) =>(
                    <Card key={index} className={styles.caroselContainer__secoes__card}>
                    <Card.Img className={styles.caroselContainer__secoes__img} variant="top" src={item.src} />
                    <Card.Body className={styles.caroselContainer__secoes__body}>
                        <Card.Title>{item.titulo}</Card.Title>
                            <Card.Text>
                                {item.descricao}
                            </Card.Text>
                        <Button  variant="primary">Emprestar</Button>
                    </Card.Body>
                </Card>
                ))}
            </section> 

            <h2 className={styles.caroselContainer__titulo}>Ciência e Matemática</h2>
			<section className={styles.caroselContainer__secoes}>
                {Livro.map((item, index)=>(
                        <Card key={index} className={styles.caroselContainer__secoes__card}>
                        <Card.Img className={styles.caroselContainer__secoes__img} variant="top" src={item.src} />
                        <Card.Body className={styles.caroselContainer__secoes__body}>
                            <Card.Title>{item.titulo}</Card.Title>
                                <Card.Text>
                                    {item.descricao}
                                </Card.Text>
                            <Button  variant="primary">Emprestar</Button>
                        </Card.Body>
                    </Card>
                    ))}    
            </section> 
	    </section>
    )
}