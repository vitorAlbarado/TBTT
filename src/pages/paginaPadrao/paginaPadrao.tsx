import Cabecalho from 'components/cabecalho';
import Footer from 'components/footer/footer';
import {Outlet, useLocation} from 'react-router-dom';

export default function PaginaPadrao() {
    const pageAtiva = useLocation().pathname;
    return (
      <>
        <Cabecalho pageAtiva={pageAtiva}/>
        <Outlet/>
        <Footer/>
      </>
    );
  }