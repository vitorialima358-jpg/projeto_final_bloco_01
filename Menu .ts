import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                Livraria Hanna                     ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Livro                     ");
        console.log("            2 - Listar todos os Livros              ");
        console.log("            3 - Buscar Livro por Código             ");
        console.log("            4 - Atualizar Dados do Livro            ");
        console.log("            5 - Apagar Livro                        ");
        console.log("            9 - Sair                                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        opcao = readlinesync.questionInt("Entre com a opção desejada: ");

        if (opcao === 9) {
            console.log("\nVocês sairam da Livraria Hanna com 2 N's!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Livro\n\n");
                break;

            case 2:
                console.log("\n\nListar todos os Livros\n\n");
                break;

            case 3:
                console.log("\n\nBuscar Livro por Código\n\n");
                break;

            case 4:
                console.log("\n\nAtualizar dados do Livro\n\n");
                break;

            case 5:
                console.log("\n\nApagar um Livro\n\n");
                break;

            default:
                console.log("\nOpção Inválida!\n");
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}
