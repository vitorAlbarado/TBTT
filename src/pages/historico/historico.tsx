import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../acervo/Acervo.module.scss';
import IEmprestimos from 'Interfaces/Emprestimos/IEmprestimos';
import { Pagination, Table } from 'react-bootstrap';
import verificaEmprestimos from './VerificaEmprestimo';

export default function Histotico() {

  const [page, setPage] = useState(0);
  const [emprestimos, setEmprestimos] = useState<IEmprestimos[]>([]);
  const [totalPages, setTotalPages] = useState(0)
  const [active, setActive] = useState(0);
  let items = [];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/emprestimos', {
        params: {
          page: page,
          
        }
      })
      setTotalPages(response.data.totalPages);
      setActive(response.data.pageable.pageNumber);
      console.log(response)
      console.log(totalPages)
      console.log(active)
      const emprestimos: IEmprestimos[] = response.data.content;
      const dados = verificaEmprestimos(emprestimos);
      setEmprestimos(dados);
    };
    fetchData();
  }, [page])

  for (let number = 0; number < totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => setPage(number)}>
        {number + 1}
      </Pagination.Item>,
    );
  }
  return (
    <section className={styles.container}>
      
      <div className={styles.container__pesquisar}>
        <input id="pesquisar__input" type="text" placeholder="Informe o ID" />
        <button className={styles.container__pesquisar__button} type="submit">Buscar</button>
      </div>

      <Table striped bordered hover size='sm' className={styles.container__tabela}>
        <thead className={styles.container__tabela__thead}>
          <tr>
            <th >Matricula</th>
            <th >Aluno</th>
            <th >Turma</th>
            <th >ID Livro</th>
            <th >Titulo</th>
            <th>Data</th>
            <th>Status</th>
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
            <td>{item.status ? 'Atrasado' : item.ativo ? '':'Entregue'}</td>

          </tr>)}
        </tbody>
      </Table>
      <div className={styles.container_pagination}>
        <Pagination>{items}</Pagination>
      </div>
    </section>
  )
}