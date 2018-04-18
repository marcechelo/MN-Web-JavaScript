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
    //imprimir
};

console.log(usuario);
console.log(usuario.nombre);
delete usuario.edad;
console.log(usuario);
usuario.fechaNaciemientoa = new Date();
console.log(usuario);
usuario.mascotas = {};
usuario.mascotas.nombre = 'pepito';
console.log(usuario);


/*if (-1) {
    console.log('verdadero');
} else {
    console.log('falso')
}*/


