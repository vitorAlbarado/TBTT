import './caroselContainer.css'
import GuiaFrontEnd from '../../assets/img/Guia Front-end.png'
import ApacheKafka from '../../assets/img/ApacheKafka.png'
import javascript from '../../assets/img/Javascript.png'
import Lideranca from '../../assets/img/Liderança.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function CaroselContainer(){
    return(
        <section className="caroselContainer">
			<h2 className="container-secoes__titulo">Mais Populares</h2>
			<section className="container-secoes">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="img-carrosel" variant="top" src={javascript} />
                    <Card.Body>
                        <Card.Title>Guia Front-end</Card.Title>
                            <Card.Text>
                                O melhor e mais completo guia de font-end do mercado do zero ao pro.
                            </Card.Text>
                        <Button variant="primary">Emprestar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img className="img-carrosel" variant="top" src={Lideranca} />
                    <Card.Body>
                        <Card.Title>Guia Front-end</Card.Title>
                            <Card.Text>
                                O melhor e mais completo guia de font-end do mercado do zero ao pro.
                            </Card.Text>
                        <Button variant="primary">Emprestar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img className="img-carrosel" variant="top" src={ApacheKafka} />
                    <Card.Body>
                        <Card.Title>Guia Front-end</Card.Title>
                            <Card.Text>
                                O melhor e mais completo guia de font-end do mercado do zero ao pro.
                            </Card.Text>
                        <Button variant="primary">Emprestar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img className="img-carrosel" variant="top" src={GuiaFrontEnd} />
                    <Card.Body>
                        <Card.Title>Guia Front-end</Card.Title>
                            <Card.Text>
                                O melhor e mais completo guia de font-end do mercado do zero ao pro.
                            </Card.Text>
                        <Button variant="primary">Emprestar</Button>
                    </Card.Body>
                </Card>
            </section> 

            <h2 className="container-secoes__titulo">Ciência e Matemática</h2>
			<section className="container-secoes">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="img-carrosel" variant="top" src={Lideranca} />
                    <Card.Body>
                        <Card.Title>Guia Front-end</Card.Title>
                            <Card.Text>
                                O melhor e mais completo guia de font-end do mercado do zero ao pro.
                            </Card.Text>
                        <Button variant="primary">Emprestar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img className="img-carrosel" variant="top" src={ApacheKafka} />
                    <Card.Body>
                        <Card.Title>Guia Front-end</Card.Title>
                            <Card.Text>
                                O melhor e mais completo guia de font-end do mercado do zero ao pro.
                            </Card.Text>
                        <Button variant="primary">Emprestar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img className="img-carrosel" variant="top" src={javascript} />
                    <Card.Body>
                        <Card.Title>Guia Front-end</Card.Title>
                            <Card.Text>
                                O melhor e mais completo guia de font-end do mercado do zero ao pro.
                            </Card.Text>
                        <Button variant="primary">Emprestar</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img className="img-carrosel" variant="top" src={GuiaFrontEnd} />
                    <Card.Body>
                        <Card.Title>Guia Front-end</Card.Title>
                            <Card.Text>
                                O melhor e mais completo guia de font-end do mercado do zero ao pro.
                            </Card.Text>
                        <Button variant="primary">Emprestar</Button>
                    </Card.Body>
                </Card>
            </section> 
	    </section>
    )
}