import { Livro } from "../model/Livro";

import { Repository } from "../repository/Repository";


export class LivroController implements Repository {

    private listaLivros: Array<Livro> = [];

    public procurarPorCodigo(codigo: number): Livro | undefined {
        return this.listaLivros.find(livro => livro.codigo === codigo);
    }

  public listarTodos(): Livro[] {

    if (this.listaLivros.length === 0) {
        console.log("\nNão há livros cadastrados!\n");
        return [];
    }

    this.listaLivros.forEach(livro => livro.visualizar());

    return this.listaLivros;
}


    public cadastrar(livro: Livro): void {
        this.listaLivros.push(livro);
        console.log("\nLivro cadastrado com sucesso!");
    }

    public atualizar(livro: Livro): void {
        const index = this.listaLivros.findIndex(l => l.codigo === livro.codigo);

        if (index !== -1) {
            this.listaLivros[index] = livro;
            console.log("\nLivro atualizado com sucesso!");
        } else {
            console.log("\nLivro não encontrado!");
        }
    }

   public deletar(codigo: number): void {
    const index = this.listaLivros.findIndex(livro => livro.codigo === codigo);

    if (index !== -1) {
        this.listaLivros.splice(index, 1);
    }
}




}
