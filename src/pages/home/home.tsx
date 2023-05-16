import Footer from 'components/footer/footer';
import Carosel from '../../components/carosel';
import CaroselContainer from '../../components/caroselContainer/caroselContainer';
import Jumbotron from '../../components/jumbotron';

export default function Home(){
    return(
        <section>
            <Carosel/>
            <Jumbotron/>
            <CaroselContainer/>
            <Footer/>
        </section>
    )
}