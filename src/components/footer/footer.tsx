import logo from '../../assets/img/logo.png'
import './footer.css'
export default function Footer(){
    return(
        <footer className='footer'>
	        <img src={logo} style={{height:"100px"}} alt="logo"/>
	        <p>Copyright vitor</p>
        </footer>
    )
}