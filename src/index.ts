import carregarPessoas from "./function/carregar-pessoas.ts";
import sortearAzarado from "./function/sortear-azarado.ts";
import terminal from "./ui/terminal.ts";

async function rodar() {
    const pessoas =carregarPessoas('./src/data/dados.csv');
    const duracaoEmSegundos = 10;
    const azarado = await sortearAzarado(pessoas, duracaoEmSegundos);
    
    terminal.clear();
    
    terminal.white("\nO").brightRed(" AZARADO");
    terminal.bold.brightGreen(" MAIS SORTUDO").white(" é...\n");
    terminal.bold.brightYellow(azarado.toString());
    
        
    console.log();
    
}
rodar();

