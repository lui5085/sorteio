import carregarPessoas from "./function/carregar-pessoas.ts";
import sortearAzarado from "./function/sortear-azarado.ts";
import terminal from "./ui/terminal.ts";

const pessoas =carregarPessoas('./src/data/dados.csv');
const azarado = sortearAzarado(pessoas);

terminal.clear();

terminal.white("\nO").brightRed(" AZARADO");
terminal.bold.brightGreen(" MAIS SORTUDO").white(" é...\n");
terminal.bold.brightYellow(azarado.toString());

    
console.log();

