import Cabecalho from '../../components/cabecalho';
import Carosel from '../../components/carosel';
import CaroselContainer from '../../components/caroselContainer/caroselContainer';
import Footer from '../../components/footer/footer';
import Jumbotron from '../../components/jumbotron';

export default function Home(){
    const ativo = 'home'
    return(
        <>
            <Cabecalho />
            <Carosel/>
            <Jumbotron/>
            <CaroselContainer/>
            <Footer/>
        </>
    )
}