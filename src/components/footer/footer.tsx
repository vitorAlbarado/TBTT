import logo from '../../assets/img/logo.png'
import styles from './Footer.module.scss';
export default function Footer(){
    return(
        <footer className={styles.footer}>
	        <img src={logo}  alt="logo"/>
	        <p>Copyright vitor</p>
        </footer>
    )
}