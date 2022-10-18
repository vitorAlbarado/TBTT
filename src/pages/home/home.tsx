import Cabecalho from '../../components/cabecalho';
import Carosel from '../../components/carosel';
import CaroselContainer from '../../components/caroselContainer/caroselContainer';
import Footer from '../../components/footer/footer';
import Jumbotron from '../../components/jumbotron';

export default function Home(){
    
    return(
        <>
            <Cabecalho ativo="home"/>
            <Carosel/>
            <Jumbotron/>
            <CaroselContainer/>
            <Footer/>
        </>
    )
}