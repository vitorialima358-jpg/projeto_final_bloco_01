import { Livro } from "./Livro";

export class LivroDigital extends Livro {

    private _tamanhoMB: number;

    constructor(codigo: number, titulo: string, autor: string, preco: number, tamanhoMB: number) {
        super(codigo, titulo, autor, preco);
        this._tamanhoMB = tamanhoMB;
    }

    public visualizar(): void {
        console.log("\n=== LIVRO DIGITAL ===");
        console.log("Código: " + this.codigo);
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Preço: R$ " + this.preco.toFixed(2));
        console.log("Tamanho do arquivo: " + this._tamanhoMB + "MB");
    }
}
