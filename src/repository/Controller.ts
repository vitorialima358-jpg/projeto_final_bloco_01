import { Livro } from "../model/Livro";
import { ILivroRepository } from "./Repository";

export class LivroController implements ILivroRepository {

    private listaLivros: Array<Livro> = [];

    public procurarPorCodigo(codigo: number): Livro | undefined {
        return this.listaLivros.find(livro => livro.codigo === codigo);
    }

    public listarTodos(): Livro[] {
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
        const index = this.listaLivros.findIndex(l => l.codigo === codigo);

        if (index !== -1) {
            this.listaLivros.splice(index, 1);
            console.log("\nLivro deletado!");
        } else {
            console.log("\nLivro não encontrado!");
        }
    }
}
