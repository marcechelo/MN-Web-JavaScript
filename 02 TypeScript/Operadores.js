var arreglonumeros = [1, 2, 3, 4, 5];
//let arregloUsuario: Array<UsuarioArreglo>= [
var arregloUsuarios = [
    {
        nombre: 'adrian',
        edad: 28
    },
    {
        nombre: 'gabriela',
        edad: 10
    },
    {
        nombre: 'felipe',
        edad: 68
    },
    {
        nombre: 'wendy',
        edad: 32
    },
    {
        nombre: 'roberto',
        edad: 18
    },
];
//fat arrow function
var sumarDosNumero = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var sumarDosNumeroV2 = function (numeroUno, numeroDos) { return numeroUno + numeroDos; };
var potenciaDeUnNumero = function (numero) {
    return numero * numero;
};
var potenciaDeUnNumeroV2 = function (numero) { return numero * numero; };
//Operador ForEach
var sumaTotal = 0;
var resultadoForEach = arreglonumeros.forEach(function (valorActual, indiceActual, arreglo) {
    sumaTotal = sumaTotal + valorActual;
    //console.log(valorActual);
    //console.log(indiceActual);
    //console.log(arreglo);
});
//console.log(resultadoForEach);
//console.log(sumaTotal);
//Operador Reduce
var resultadoSumaConReduce = arreglonumeros.reduceRight(function (valorAcumuladoActual, valorActualArreglo) {
    //console.log('valor acumulado actual', valorAcumuladoActual);
    //console.log('valor actual del arreglo',valorActualArreglo);
    return valorAcumuladoActual - valorActualArreglo;
}, 20);
//console.log(resultadoSumaConReduce);
var sumaEdadesDeUsuarios = arregloUsuarios.reduce(function (acumuladoEdad, usuario) { return acumuladoEdad + usuario.edad; }, 0);
//console.log(sumaEdadesDeUsuarios);
//Operador Map
var nuevoArregloDeUsuarios = arregloUsuarios.map(function (usuario) {
    usuario.becado = false;
    return usuario;
}).map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
    //Operador filter
})
    .filter(function (usuario) { return usuario.deuda < 50; });
//Operadores some y every
//.some((usuario:UsuarioArreglo)=>usuario.edad<18);
console.log('nuevo arreglo de usuarios' + '\n', nuevoArregloDeUsuarios);
function calcularDeuda(edadUsuario) {
    var totalEdad = arregloUsuarios.reduce(function (total, usuario) { return total + usuario.edad; }, 0);
    return totalEdad * (edadUsuario / 100);
}
