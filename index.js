var carrito =[["papaya",3],["mango",5]];

console.log(carrito);

var agregarElemento = function(item,cantidad){
 var item=prompt("Qué item desea agregar?");
 var cantidad=prompt("Qué cantidad de ese item va a agregar?")
 carrito.push([item,cantidad]);
}

var removerElemento = function(elementoARemover){
	var elementoARemover=prompt("Si desea remover el primer elemento ingrese 1, Si desea remover el ultimo elemento ingrese 2");
	if (elementoARemover == 1) {
		carrito.shift();
	}
	return carrito.pop();
}

var seleccionOperacion =prompt("Si desea remover un elemento ingrese 1, Si desea agregar un elemento ingrese 2");

var escogerOperacion=function(operacion){
	if (operacion ==2) {
		return agregarElemento();
	} 
	return removerElemento();
}

escogerOperacion(seleccionOperacion);

console.log(carrito);