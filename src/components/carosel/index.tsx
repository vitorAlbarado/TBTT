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
				<Carousel.Item>
					<iframe 
					style={{height:'400px'}}
						className="d-block w-100 embed-responsive embed-responsive-16by9 video"
						src="https://www.youtube.com/embed/TnWwDYbgweg" 
						title="YouTube video player" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
					/>
				</Carousel.Item>
			</Carousel>
		</section>
    )
}