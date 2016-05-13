 var carrito=[["Manzana",5],["Lulo",2]];

 var agregarAlCarro =function(item, cantidad){
 	carrito.push([item,cantidad]);
 }

 var quitarDelCarro =function (){
 	elementoAQuitar=prompt("Qué elemento desea quitar? \n" +carrito);
 	for (var i = 0; i <= carrito.length-1; i++) {
 		if (carrito[i][0] == elementoAQuitar ) {
 			carrito.splice(i,1);
 		}
 	}
 	//carrito.pop();
 }

 var solictarProducto=function(){
 	var item =prompt("ingrese el item");
	var cantidad=prompt("ingrese la cantidad");

	agregarAlCarro(item,cantidad);
	alert(carrito);
 }

var escogerOperacion=function(operacion){
	operacion=prompt("Si desea remover un elemento ingrese 1 \nSi desea agregar un elemento ingrese 2");
	operacion=parseInt(operacion);
	//console.log(operacion);
	if (operacion ==2) {
		return solictarProducto();
	} 
	return quitarDelCarro();
}


//EJECUCION DEL CODIGO

numeroDeVeces=prompt("Cuántas veces quiere realizar la operacion?");
numeroDeVeces=parseInt(numeroDeVeces);
for (var i = 0; i < numeroDeVeces; i++) {
	console.log(i)
	escogerOperacion();
}

// quitarDelCarro();
console.log(carrito);

