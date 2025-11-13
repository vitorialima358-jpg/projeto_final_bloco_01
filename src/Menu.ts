import readlineSync from "readline-sync";
import { colors } from "./util/Colors";

export function main() {

    let opcao: number;

    while (true) {

        console.log(
            colors.bg.black,
            colors.fg.yellow,
            "*****************************************************"
        );
        console.log("                                                     ");
        console.log("                   LIVRARIA HANNA                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Livro                      ");
        console.log("            2 - Listar todos os Livros               ");
        console.log("            3 - Alterar Cadastro                     ");
        console.log("            4 - Apagar Livro                         ");
        console.log("            5 - Sair                                 ");
        console.log("                                                     ");
        console.log(
            "*****************************************************",
            colors.reset
        );

        opcao = readlineSync.questionInt("Entre com a opcao desejada: ");

        if (opcao === 5) {
            console.log(colors.fg.greenstrong, "\nSaindo da Livraria Hanna...");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCadastrar Livro\n", colors.reset);
                keyPress();
                break;

            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Livros\n", colors.reset);
                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\n\nAlterar Cadastro\n", colors.reset);
                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong, "\n\nApagar Livro\n", colors.reset);
                keyPress();
                break;

            default:
                console.log(colors.fg.redstrong, "\nOpção Inválida!\n", colors.reset);
                keyPress();
                break;
        }
    }
}

/* Função com os dados da desenvolvedora */
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Vitória Aparecida Lima Gomes");
    console.log("Livraria Hanna com 2 N's");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione ENTER para continuar...");
    readlineSync.prompt();
}

main();
