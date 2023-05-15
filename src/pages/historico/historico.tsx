import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../acervo/Acervo.module.scss';
import IEmprestimos from 'Interfaces/Emprestimos/IEmprestimos';
import { Table } from 'react-bootstrap';

export default function Histotico() {

  const [page, setPage] = useState(0);
  const [emprestimos, setEmprestimos] = useState<IEmprestimos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8080/emprestimos', {
        params: {
          page: page
        }
      })
      
      const emprestimos: IEmprestimos[] = response.data.content;
      const dados = emprestimos.map(e => {
        const date = new Date(e.data)
        const dataAtual = new Date;
        const dataDevolucao = new Date(date.getTime() + (e.prazo*86400000))
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        if(dataDevolucao > dataAtual){
          return { ...e, data: formattedDate, status: true };
        }
        return { ...e, data: formattedDate, status: false };
      })
      setEmprestimos(dados);
    };
    fetchData();
  }, [page])

  return (
    <section className={styles.container}>
      <input className={styles.container__input} id="pesquisar__input" type="text" placeholder="Informe o ID" />
      <input className={styles.container__pesquisar} type="submit" value="Pesquisar" />

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
    </section>
  )
}