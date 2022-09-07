// Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código Você precisará criar pelo menos: * uma característica String;*  uma característica Number; * uma característica Boolean;

// Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.


const album = "off the wall"
const nomeArtista = "Michael Jackson"
const numeroDeFaixas = 10
const conteudoExplicito = false
const lancadasComoSingle = ["Don't Stop Til You Get Enough", "Rock with you", "She's Out Of My Life"]

const album1 = "Unorthodox Jukebox"
const nomeArtista1 = "Bruno Mars"
const numeroDeFaixas1 = 10
const conteudoExplicito1 = true
const lancadasComoSingle1 = ["Young Girls", "Locked Out Of Heaven", "Treasure"]

const album2 = "Admiravel Chip Novo"
const nomeArtista2 = "Pitty"
const numeroDeFaixas2 = 11
const conteudoExplicito2 = false
const lancadasComoSingle2 = ["Admirável Chip Novo", "Teto de Vidro", "Equalize", "Máscara"]

const album3 = "Future Nostalgia"
const nomeArtista3 = "Dua Lipa"
const numeroDeFaixas3 = 11 
const conteudoExplicito3 = true
const lancadasComoSingle3 = ["Don't Start Now","Break My Heart", "Levitating", "Physical"]

// Faça um cálculo de média, entre os valores numéricos respectivos de cada item. Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

let mediaDeFaixas = (numeroDeFaixas + numeroDeFaixas1 + numeroDeFaixas2 + numeroDeFaixas3) / 4

console.log ("A média de faixa desses albuns é", mediaDeFaixas)

//Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores de variáveis booleanas criadas até aqui são verdadeiras.

const verificaExplicito = conteudoExplicito && conteudoExplicito1 && conteudoExplicito2 && conteudoExplicito3

console.log (verificaExplicito)

// Crie pelo menos mais uma característica para o item que você criou. Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, só deve receber strings.  (Criei a variavel lancadasComoSingle)

// exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui, O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

console.log ("Nome do Album: " + album.toUpperCase() + " - Artista:", nomeArtista + " - Quantidade de Faixas: ", numeroDeFaixas + " - É explicito?: ", conteudoExplicito + " - Singles do Album: ", lancadasComoSingle)

console.log ("Nome do Album: " + album1.toLocaleUpperCase() + " - Artista:", nomeArtista1 + " Quantidade de Faixas: ", numeroDeFaixas1 + " - É explicito?: ", conteudoExplicito1 + " - Singles do Album: ", lancadasComoSingle1)

console.log ("Nome do Album: " + album2.toLocaleUpperCase() + " - Artista: ", nomeArtista2 + " - Quantidade de Faixas: ", numeroDeFaixas2 + " - É explicito?: ", conteudoExplicito2 + " - Singles do Album: ", lancadasComoSingle2) 

console.log ("Nome do Album: "+ album3.toLocaleUpperCase() + " - Artista: ", nomeArtista3 + " - Quantidade de Faixas: ", numeroDeFaixas3 + " - É explicito?: ", conteudoExplicito3 + " - Singles do Album: ", lancadasComoSingle3)
