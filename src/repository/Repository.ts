import { Livro } from "../model/Livro";

export interface Repository {
    procurarPorCodigo(codigo: number): Livro | undefined;
    listarTodos(): Livro[];
    cadastrar(livro: Livro): void;
    atualizar(livro: Livro): void;
    deletar(codigo: number): void;
}