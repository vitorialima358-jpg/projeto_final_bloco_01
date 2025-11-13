export abstract class Livro {

    protected _codigo: number;
    protected _titulo: string;
    protected _autor: string;
    protected _preco: number;

    constructor(codigo: number, titulo: string, autor: string, preco: number) {
        this._codigo = codigo;
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    }

    public get codigo(): number {
        return this._codigo;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(titulo: string) {
        this._titulo = titulo;
    }

    public get autor(): string {
        return this._autor;
    }

    public set autor(autor: string) {
        this._autor = autor;
    }

    public get preco(): number {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public abstract visualizar(): void;  
}
