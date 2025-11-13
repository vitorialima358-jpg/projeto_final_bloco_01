import readlinesync from "readline-sync";
import { LivroFisico } from "./model/LivroFisico";
import { LivroDigital } from "./model/LivroDigital";
import { LivroController } from "./controller/Controller";
import { Livro } from "./model/Livro";


const controller = new LivroController();

export function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                Livraria Hanna                      ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Livro                     ");
        console.log("            2 - Listar todos os Livros              ");
        console.log("            3 - Buscar Livro por Código             ");
        console.log("            4 - Atualizar Dados do Livro            ");
        console.log("            5 - Apagar Livro                        ");
        console.log("            6 - Sair                                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

        if (opcao === 9) {
            console.log("\nVocês sairam da Livraria Hanna (com 2 N's)!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {

           case 1:
    console.log("\n\nCadastrar Livro\n");

    const codigo = readlinesync.questionInt("Codigo do Livro: ");
    const titulo = readlinesync.question("Titulo: ");
    const autor = readlinesync.question("Autor: ");
    const preco = readlinesync.questionFloat("Preco (R$): ");

    console.log("\nTipo do Livro:");
    console.log("1 - Livro Fisico");
    console.log("2 - Livro Digital");
    const tipo = readlinesync.questionInt("Escolha o tipo: ");

    let novoLivro;

    if (tipo === 1) {
        // Agora pede o número de páginas
        const paginas = readlinesync.questionInt("Numero de páginas: ");

        novoLivro = new LivroFisico(codigo, titulo, autor, preco, paginas);
    } 
    else if (tipo === 2) {
        // Livro Digital pede tamanho em MB
        const tamanhoMB = readlinesync.questionFloat("Tamanho do arquivo (MB): ");
        
        novoLivro = new LivroDigital(codigo, titulo, autor, preco, tamanhoMB);
    } 
    else {
        console.log("\nTipo invalido!");
        keyPress();
        break;
    }

    controller.cadastrar(novoLivro);

    console.log("\nLivro cadastrado com sucesso!\n");
    keyPress();
    break;


            case 2:
                console.log("\n\nListar todos os Livros\n\n");
                controller.listarTodos();
                keyPress();
                break;

           case 3:
    console.log("\n\nBuscar Livro por Codigo\n\n");

    const codigoBusca = readlinesync.questionInt("Codigo do Livro: ");

    const livroEncontrado = controller.procurarPorCodigo(codigoBusca);

    if (livroEncontrado) {
        console.log("\nLivro encontrado:\n");
        livroEncontrado.visualizar();
    } else {
        console.log("\nNenhum livro encontrado com esse codigo!\n");
    }

    keyPress();
    break;


          case 4:
    console.log("\n\nAtualizar dados do Livro\n");

    const codAtualizar = readlinesync.questionInt("Codigo do Livro que deseja atualizar: ");

    const livroExistente = controller.procurarPorCodigo(codAtualizar);

    if (!livroExistente) {
        console.log("\nLivro nao encontrado!\n");
        keyPress();
        break;
    }

    console.log("\nLivro encontrado:");
    livroExistente.visualizar();

    console.log("\nDigite os novos dados:\n");

    const novoTitulo = readlinesync.question("Novo Título: ");
    const novoAutor = readlinesync.question("Novo Autor: ");
    const novoPreco = readlinesync.questionFloat("Novo Preço (R$): ");

    let livroAtualizado!: Livro;

    if (livroExistente instanceof LivroFisico) {
        const novasPaginas = readlinesync.questionInt("Numero de páginas: ");
        livroAtualizado = new LivroFisico(codAtualizar, novoTitulo, novoAutor, novoPreco, novasPaginas);

    } else if (livroExistente instanceof LivroDigital) {
        const novoTamanhoMB = readlinesync.questionFloat("Tamanho do arquivo (MB): ");
        livroAtualizado = new LivroDigital(codAtualizar, novoTitulo, novoAutor, novoPreco, novoTamanhoMB);
    }

    controller.atualizar(livroAtualizado);

    console.log("\nLivro atualizado com sucesso!\n");
    keyPress();
    break;


          case 5:
    console.log("\n\nApagar Livro\n");

    const codDeletar = readlinesync.questionInt("Codigo do Livro que deseja apagar: ");

    const livroParaExcluir = controller.procurarPorCodigo(codDeletar);

    if (!livroParaExcluir) {
        console.log("\nLivro não encontrado!\n");
        keyPress();
        break;
    }

    console.log("\nLivro encontrado:");
    livroParaExcluir.visualizar();

    const confirmar = readlinesync.question("\nTem certeza que deseja apagar? (s/n): ").toLowerCase();

    if (confirmar === "s") {
        controller.deletar(codDeletar);
        console.log("\nLivro apagado com sucesso!\n");
    } else {
        console.log("\nOperação cancelada.\n");
    }

    keyPress();
    break;

            default:
                console.log("\nOpção Invalida!\n");
                keyPress();
        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto desenvolvido por Vitória Aparecida Lima Gomes");
    console.log("Livraria Hanna (com 2 N’s)");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("\nPressione ENTER para continuar...");
    readlinesync.prompt();
}

main();
