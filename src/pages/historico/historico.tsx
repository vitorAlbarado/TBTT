import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../acervo/Acervo.module.scss';
import IEmprestimos from 'Interfaces/Emprestimos/IEmprestimos';
import { Button, Form, Pagination, Spinner, Table } from 'react-bootstrap';
import verificaEmprestimos from './VerificaEmprestimo';
import { FaCheckSquare } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';

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
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState(0);


  let items = [];

  if (confimarEnvio) {
    console.log(page)
    console.log(atualizarLista)
    axios.put('http://localhost:8080/emprestimos', {
      id: id,
      ativo: false
    })
      .then(response => {
        setConfimarEnvio(false)
        setShow(false)
        setAtualizarLista(atualizarLista+1)
      }
      )
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:8080/emprestimos', {
        params: {
          page: page
        }
      })
        .then((response) => {
          setLoading(false)
          setTotalPages(response.data.totalPages);
          setActive(response.data.pageable.pageNumber);
          const emprestimos: IEmprestimos[] = response.data.content;
          const dados = verificaEmprestimos(emprestimos);
          setEmprestimos(dados);
        })
        .catch(error => console.log(error))
    };
    fetchData();
  }, [page,atualizarLista])

  const handleShow = (id: number) => {
    setShow(true);
    setId(id);
    console.log(id)
  }



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

      <Form >
        <div className={styles.container__pesquisar}>
          <Form.Control type="number" placeholder="Informe o ID" value={busca} onChange={e => setBusca(parseFloat(e.target.value))} />
          <Button type="submit">
            Buscar
          </Button>
        </div>
      </Form>

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
        </tbody>
      </Table>
      {loading && <div><Spinner animation="grow"></Spinner></div>}
      <div className={styles.container_pagination}>
        <Pagination>{items}</Pagination>
      </div>
    </section>
  )
}