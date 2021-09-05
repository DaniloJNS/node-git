const fs = require("fs");

const content = fs.readFileSync(process.argv[2]); // ler o arquivo
const lines = content.toString().split("\n").length - 1; // conta  as linhas

console.log(lines);
// ler path de uma arquivo sendo passado seu path pelo stdin e retorna
// o numero de linha desse arquivo
