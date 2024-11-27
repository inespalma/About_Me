function wordsExistInLetterSoup(array, palavra) {
  let dia1 = "";
  let dia2 = "";
  let linhas = [...array];
  let colunas = [];

  for (let iColuna = 0; iColuna < array.length; iColuna++) {
    console.log("ola", iColuna);
    let coluna = "";
    for (let iLinha = 0; iLinha < array.length; iLinha++) {
      console.log("entrou", iColuna, iLinha);
      coluna += array[iLinha][iColuna];
    }
    colunas.push(coluna);
    console.log("adeus");
  }
  let todasAsPossibilidades = [dia1, dia2].concat(linhas).concat(colunas);
  for (let i = 0; i < todasAsPossibilidades.length; i++) {
    todasAsPossibilidades[i];
    console.log(todasAsPossibilidades)
  }
}

console.log(wordsExistInLetterSoup(["LOOT", "OLOE", "AYYF", "PAON"], "OLA"));
