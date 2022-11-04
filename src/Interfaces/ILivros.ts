export default interface ILivros {
  idLivro:string,
  tituloLivro:string,
  editora?:string,
  dataLancamento?:Date | string,
  autor?:string,
}