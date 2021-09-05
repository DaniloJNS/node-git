const soma = process.argv.reduce((resultado, current) => {
  if (!isNaN(Number(current))) {
    resultado += Number(current);
  }
  return resultado;
}, 0);

console.log(soma);
