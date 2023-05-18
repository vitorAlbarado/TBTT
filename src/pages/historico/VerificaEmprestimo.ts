import IEmprestimos from "Interfaces/Emprestimos/IEmprestimos";

export default function verificaEmprestimos(emprestimos:IEmprestimos[]){
    //valida se o emprestimo está atrasado
    const dados = emprestimos.map(e => {
        const date = new Date(e.data)
        const dataAtual = new Date;
        const dataDevolucao = new Date(date.getTime() + (e.prazo*86400000))
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        if(dataDevolucao < dataAtual && e.ativo){
          return { ...e, data: formattedDate, atrasado: true };
        }
        return { ...e, data: formattedDate, atrasado: false };
      })
      return dados;
}