//-- Exercicio 1 ----------------------------------------------

function conta(n) {
	let indice = 13 
	let soma = 0 
	let k = 0

	while(k < indice){
		k = k + 1
		soma = soma + k

		return soma

		console.log(soma)
		document.write(soma)
	}
	
}

conta()

//valor da soma = 89



//document.write('O resultado da soma do 1° exercicio é: '+soma)
console.log('<hr>')

// Exercicio 2 --------------------------------------------------

function fibonacci(n) {
	let ant = 0
	let atual = 1
	let proximo = 1

	for(let i = 0; i < n; i++){
		console.log(proximo)
		ant = atual + proximo
		atual = proximo
		proximo = ant
	}
}

fibonacci(10)

console('<br>')

function inverter(string){

	let saida = "";
	for (let i = string.length - 1; i >= 0; i--) {
		saida+= string[i]
	}
	console.log(saida)
}

inverter(prompt())

  