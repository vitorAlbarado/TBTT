import Carousel from 'react-bootstrap/Carousel';
import imgCarosel1 from '../../assets/img/item-carosel-1.png'
import imgCarosel2 from '../../assets/img/item-carosel-2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from 	'./Carosel.module.scss';

export default function Carosel() {
    return (
		<section className={styles.caroselHome}>
			<Carousel>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src={imgCarosel1}
					alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src={imgCarosel2}
					alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
					className="d-block w-100"
					src={imgCarosel2}
					alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</section>
    )
}