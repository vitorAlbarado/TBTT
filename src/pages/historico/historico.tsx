import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../acervo/Acervo.module.scss';
import IEmprestimos from 'Interfaces/Emprestimos/IEmprestimos';
import { Button, Pagination, Spinner, Table } from 'react-bootstrap';
import verificaEmprestimos from './VerificaEmprestimo';
import { FaCheckSquare } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { error } from 'console';


export default function Histotico() {

  const [page, setPage] = useState(0);
  const [emprestimos, setEmprestimos] = useState<IEmprestimos[]>([]);
  const [totalPages, setTotalPages] = useState(0)
  const [active, setActive] = useState(0);

  const [show, setShow] = useState(false);
  const [confimarEnvio, setConfimarEnvio] = useState(false);
  const [id, setId] = useState(0);
  const handleClose = () => setShow(false);
  const [atualizarLista, setAtualizarLista] = useState(1);
  const [loading, setLoading] = useState(false);

  let items = [];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/emprestimos', {
        params: {
          page: page,
        }
      })
      setLoading(false)
      
      setTotalPages(response.data.totalPages);
      setActive(response.data.pageable.pageNumber);
      console.log(response)
      const emprestimos: IEmprestimos[] = response.data.content;
      const dados = verificaEmprestimos(emprestimos);
      setEmprestimos(dados);
    };
    fetchData();
  }, [page, atualizarLista])

  const handleShow = (id: number) => {
    setShow(true);
    setId(id);
    console.log(id)
  }

  useEffect(()=>{
    axios.put('http://localhost:8080/emprestimos', {
      id: id,
      ativo: false
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))
    setConfimarEnvio(false)
    setShow(false)
    setAtualizarLista(atualizarLista + 1)
  },[confimarEnvio])
   

  

  for (let number = 0; number < totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => setPage(number)}>
        {number + 1}
      </Pagination.Item>,
    );
  }
  return (
    <section className={styles.container}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Marcar devolução</Modal.Title>
        </Modal.Header>
        <Modal.Body>O emprestimo será marcado como devolvido e deixará de ser exibido na lista</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={() => setConfimarEnvio(true)}>Confirmar</Button>
        </Modal.Footer>
      </Modal>
      
      <div className={styles.container__pesquisar}>
        <input id="pesquisar__input" type="text" placeholder="Informe o ID" />
        <button className={styles.container__pesquisar__button} type="submit">Buscar</button>
      </div>

      <Table striped bordered hover size='sm' className={styles.container__tabela}>
        <thead className={styles.container__thead}>
          <tr>
            <th >Matricula</th>
            <th >Aluno</th>
            <th >Turma</th>
            <th >ID Livro</th>
            <th >Titulo</th>
            <th>Data</th>
            <th>Prazo</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="tabela-historico__body">
          {emprestimos.map((item, index) => <tr key={index}>

            <td>{item.matricula}</td>
            <td>{item.nome}</td>
            <td>{item.turma}</td>
            <td>{item.idLivro}</td>
            <td>{item.titulo}</td>
            <td>{item.data}</td>
            <td>{item.prazo}</td>
            <td>{item.atrasado && item.ativo ? 'Atrasado' : item.ativo ? '' : 'Entregue'}</td>
            <td><button className={styles.button_check} onClick={() => handleShow(item.id)}>{item.ativo && <FaCheckSquare />}</button></td>

          </tr>)}
          {loading && <Spinner animation='grow'/>}
        </tbody>
      </Table>
      <div className={styles.container_pagination}>
        <Pagination>{items}</Pagination>
      </div>
    </section>
  )
}