//console.log('hola mundo');
var nombre = 'marcelo';
var edad = 22;
var peso = 305.1;
var casaedo = false;
var fecha = new Date();
var noExisto = null;
var noEstoyDefinido = undefined;
var mutar;

//Json, se llaman Objetos
var usuario = {
    nombre: 'Marcelo',
    apellido: 'Nieto',
    cedula: '871923',
    edad: 22,
    imprimir: function () {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    }
};

//console.log(usuario);
//console.log(usuario.nombre);
//delete usuario.edad;
//console.log(usuario);
//usuario.fechaNaciemientoa = new Date();
//console.log(usuario);
//usuario.mascotas = {};
//usuario.mascotas.nombre = 'pepito';
//console.log(usuario);

//arreglo
var arreglo = [1,'marcelo', false,null,undefined,new Date(),{nombre:'ronnie'},[1,2,3],usuario.imprimir,usuario.imprimir()];
console.log(arreglo);

function sumarDosNumeros(numeroUno,numeroDos) {
    return numeroUno+numeroDos;
}
//console.log(sumarDosNumeros(1,2));
//console.log(sumarDosNumeros(1,2.34));

//funciones anonimas
var potenciaDeDosDeUnNumero = function (numero) {
  return numero*numero;
};
//console.log(potenciaDeDosDeUnNumero(2));

console.log(usuario.imprimir());
/*if (-1) {
    console.log('verdadero');
} else {
    console.log('falso')
}*/


