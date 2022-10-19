import logo from '../../assets/img/logo.png'
import styles from './Footer.module.scss';
export default function Footer(){
    return(
        <footer className={styles.footer}>
	        <img src={logo} style={{height:"100px"}} alt="logo"/>
	        <p>Copyright vitor</p>
        </footer>
    )
}