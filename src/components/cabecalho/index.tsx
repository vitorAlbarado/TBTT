import style from './Cabecalho.module.scss';
import logo from '../../assets/img/logo.png'
import { Link, NavLink, } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


export default function Cabecalho(props: any) {
  const link = [
    {
      to: '/',
      label: 'Home'
    },
    {
      to: '/emprestar',
      label: 'Emprestar'
    },
    {
      to: '/cadastrar',
      label: 'Cadastrar'
    },
    {
      to: '/acervo',
      label: 'Acervo'
    },
    {
      to: '/historico',
      label: 'Historico'
    },
  ]

  return (

    <header className={style.header}>
      <Dropdown className={style.dropDown}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          {link.map((item, index) => (
            <Dropdown.Item key={index} ><li className={style.menu__link}><Link to={item.to}>{item.label}</Link></li></Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <a href="/"><img className={style.header__img} src={logo} alt="Logo da Empresa" /></a>
      <nav className={style.menu}>
        {link.map((item, index) =>
          <NavLink style={({ isActive }) => ({ color: isActive ? 'black' : '', fontSize: isActive ? '1.2em' : '' })}key={index} to={item.to} end>{item.label}</NavLink>
        )}
      </nav>

    </header >
  );
}
