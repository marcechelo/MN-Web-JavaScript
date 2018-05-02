let arreglonumeros = [1, 2, 3, 4, 5];

//let arregloUsuario: Array<UsuarioArreglo>= [
let arregloUsuarios: UsuarioArreglo[] = [
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

//Interfaz

interface UsuarioArreglo {
    nombre: String,
    edad: number,
    deuda?: number,
    becado?: boolean
}

//fat arrow function
let sumarDosNumero = (numeroUno: number, numeroDos: number): number => {
    return numeroUno + numeroDos
};
let sumarDosNumeroV2 = (numeroUno: number, numeroDos: number): number => numeroUno + numeroDos;

let potenciaDeUnNumero = numero => {
    return numero * numero
};
let potenciaDeUnNumeroV2 = numero => numero * numero;

//Operador ForEach
let sumaTotal = 0;
let resultadoForEach = arreglonumeros.forEach((valorActual, indiceActual, arreglo) => {
        sumaTotal = sumaTotal + valorActual;
        //console.log(valorActual);
        //console.log(indiceActual);
        //console.log(arreglo);
    }
);
//console.log(resultadoForEach);
//console.log(sumaTotal);

//Operador Reduce
let resultadoSumaConReduce = arreglonumeros.reduceRight((valorAcumuladoActual, valorActualArreglo) => {
        //console.log('valor acumulado actual', valorAcumuladoActual);
        //console.log('valor actual del arreglo',valorActualArreglo);
        return valorAcumuladoActual - valorActualArreglo
    },
    20);
//console.log(resultadoSumaConReduce);

let sumaEdadesDeUsuarios = arregloUsuarios.reduce((acumuladoEdad: number, usuario: UsuarioArreglo) => acumuladoEdad + usuario.edad, 0);
//console.log(sumaEdadesDeUsuarios);

//Operador Map
let nuevoArregloDeUsuarios = arregloUsuarios.map((usuario: UsuarioArreglo) => {
        usuario.becado = false;
        return usuario;
    }
).map((usuario: UsuarioArreglo) => {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
//Operador filter
})
    .filter((usuario: UsuarioArreglo) => usuario.deuda < 50);
//Operadores some y every
//.some((usuario:UsuarioArreglo)=>usuario.edad<18);

console.log('nuevo arreglo de usuarios' + '\n', nuevoArregloDeUsuarios);

function calcularDeuda(edadUsuario: number) {
    const totalEdad = arregloUsuarios.reduce((total, usuario: UsuarioArreglo) => total + usuario.edad, 0);
    return totalEdad * (edadUsuario / 100);
}
