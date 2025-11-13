import { Livro } from "./Livro";

export class LivroFisico extends Livro {

    private _paginas: number;

    constructor(codigo: number, titulo: string, autor: string, preco: number, paginas: number) {
        super(codigo, titulo, autor, preco);
        this._paginas = paginas;
    }

    public visualizar(): void {
        console.log("\n=== LIVRO FÍSICO ===");
        console.log("Código: " + this.codigo);
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Preço: R$ " + this.preco.toFixed(2));
        console.log("Páginas: " + this._paginas);
    }
}
