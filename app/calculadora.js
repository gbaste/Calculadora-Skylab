//Creamos una variable con un array vacio donde haremos un push de los numeros intrducidos
var elements = []
//creamos una variable con un array vacio de los numeros que mostraremos en pantalla
var numbersOnScreen = []


//Creamos una funcion donde le pasaremos unos valores
function sumNumbersOnScreen(screenNumbers){
//si contiene alguno de los siguiente simbolos
	if(screenNumbers === '+' || screenNumbers === '-' || screenNumbers === '*' || screenNumbers === '/' || screenNumbers === '√'){
//haz lo siguiente: push de los numeros al array vacia creada anteriormente
		numbersOnScreen.push(screenNumbers)
		//devuelve el resultado de ese array
		return document.getElementById('resultsBox').value = numbersOnScreen.join('')
// si no contiene ninguno de los simbolos anteriores pero si una C llamaremos a la funcion 
} else if (screenNumbers === 'C'){
	clearScreen();

	//si no es ninguno de esos casos hacemos lo mismo que en el paso uno
} else {
	numbersOnScreen.push(screenNumbers)
	return document.getElementById('resultsBox').value = numbersOnScreen.join('')

}


}

//creamos la funcion de volver a 0, para eso reiniciamos todos los arrays creados y devolvemos el 0 ya que al llamar esa funcion la llamamos pasandole el valor 0

function clearScreen(num){
	elements = []
	numbersOnScreen = []
	var zero = parseInt(num)
	document.getElementById('resultsBox').value = zero


}

//creamos la funcion para hace un push al array elementos

function addNumbers(num){

	elements.push(num)

}


//creamos la funcion calculate que dependiendo del simbolo hara la suma resta etc
function calculate(){
	if (elements.indexOf('+') !== -1){
		var elementsToOperation = elements.join('').split('+')
		console.log(elementsToOperation)
		var result = elementsToOperation.reduce(function(a,b){
		//return parseInt(a)+parseInt(b)
		return parseFloat(a) + parseFloat(b)

	})
		document.getElementById('resultsBox').value = result

	}else if (elements.indexOf('-') !== -1){

		var elementsToOperation = elements.join('').split('-')
		var result = elementsToOperation.reduce(function(a,b){
		//return parseInt(a)-parseInt(b)
		return parseFloat(a) - parseFloat(b)
	})
		document.getElementById('resultsBox').value = result


	}else if (elements.indexOf('*') !== -1){

		var elementsToOperation = elements.join('').split('*')
		var result = elementsToOperation.reduce(function(a,b){
		//return parseInt(a)*parseInt(b)
		return parseFloat(a) * parseFloat(b)
	})
		document.getElementById('resultsBox').value = result


	} else if (elements.indexOf('/') !== -1){

		var elementsToOperation = elements.join('').split('/')
		var result = elementsToOperation.reduce(function(a,b){
		//return parseInt(a)/parseInt(b)
		return parseFloat(a) / parseFloat(b)
	})
		document.getElementById('resultsBox').value = result

	} else {

		var elementsToOperation = elements.join('').split('√')
		var result = elementsToOperation.reduce(function(a,b){
		//return parseInt(a)/parseInt(b)

		var raiz = Math.sqrt(a)
		return parseFloat(raiz)
	})
		document.getElementById('resultsBox').value = result

	}

}



/*fallos encontrados en la calculadora

1- Si sumas numeros concatenados, solo hace la primera operacion
2- Si hay un numero y decimales, muestra mas que espacio hay en pantalla


*/


// var nums = []


// function num(n){

// 	nums.push(n)
// 	console.log(nums)
// }
// function calculate(){
// 	var result = nums.reduce(function(a,b){
// 		return a+b
// 	})
// 	console.log(result)

// }

// function sum(num1,num2){

// var sum = num1 + num2

// return sum

// }

// function rest(num1,num2){

// var rest = num1 - num2

// return rest

// }

// function mult(num1,num2){

// var mult = num1 * num2

// return mult

// }

// function div(num1,num2){

// var div = num1 / num2

// return div

// }

