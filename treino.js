// funções de calculos necessarios para a realização da média
function soma() {
  const numeros = [...arguments];
  return numeros.reduce(function (soma, atual) {
    return soma + atual;
  }, 0);
}

function media() {
  return soma(...arguments) / arguments.length;
}

// Função principal para manipulação do DOM, boletim escolar.
(function () {
  const alunos = [
    { nome: "Bruno", notas: [7, 5, 9, 7, 10] },
    { nome: "Bianca", notas: [9, 7, 9, 7, 8] },
    { nome: "Willian", notas: [10, 5, 5, 7, 8] },
    { nome: "Jhonatan", notas: [7, 5, 5, 4, 10] },
    { nome: "Patrick", notas: [5, 5, 9, 7, 9] },
    { nome: "Mateus", notas: [7, 5, 9, 9, 5] },
    { nome: "Ana B.", notas: [9, 7, 9, 10, 10] },
    { nome: "Natalia", notas: [5, 5, 9, 9, 10] },
    { nome: "Silvio", notas: [7, 5, 9, 7, 10] },
    { nome: "Ana", notas: [9, 7, 9, 7, 8] },
    { nome: "Duda", notas: [7, 5, 5, 4, 10] },
    { nome: "Pedro", notas: [7, 5, 9, 7, 8] },
  ];

  alunos.forEach(function (aluno) {
    aluno.media = media(...aluno.notas);
  });

  const html = alunos
    .map(
      (aluno) => ` 
  <tr class= "${aluno.media < 7 ? "reprovado" : "aprovado"}">
    <td>${aluno.nome}</td>
    ${aluno.notas.map((n) => `<td>${n}</td>`).join("")}
    <td>${aluno.media}</td>
    <td>${aluno.media < 7 ? "Reprovado" : "Aprovado"}</td>
  </tr>
  `
    )
    .join("");

  document.querySelector("tbody").innerHTML = html;
})();
