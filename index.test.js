//Não faça nada neste arquivo
const { execSync } = require('child_process');
const { somar } = require('./index');

test('verifica o retorno da função somar', () => {
  expect(somar(2, 10)).toBe(12); 
  expect(somar(3, 4)).toBe(7); 
  expect(somar(-1, 1)).toBe(0); 
});

test('verifica a saída no console', () => {
  const output = execSync('node index.js').toString();
  const expectedOutput = "O resultado da soma é 12\n"; // Espera-se que a saída seja "O resultado da soma é 12"
  expect(output).toBe(expectedOutput);
});
