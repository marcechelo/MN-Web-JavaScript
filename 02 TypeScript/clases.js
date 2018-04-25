var hola;
var adios = 'Adios';
hola = 'chao';
hola = 1;
//console.log(hola);
//tipos de variables
var nombre = 'marcelo';
var edad = 22;
var casado = false;
var fecha = new Date();
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var ronnie = {
    nombre: 'ronnie',
    edad: 22,
    casado: false
};
var marcelo = new Usuario('marcelo', false, 22);
//console.log(marcelo);
//console.log(ronnie);
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "casado", {
        get: function () {
            return this._casado;
        },
        set: function (casado) {
            this._casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioDos.prototype.imprimirUsuario = function (saludo) {
        //temple String
        return saludo + ". Mi nombre es " + this.nombre + ", estoy casado: " + this.casado + ", mi edad es " + this._edad;
    };
    return UsuarioDos;
}());
var marceloDos = new UsuarioDos('marcelo', false, 22);
console.log(marceloDos.imprimirUsuario('hola'));
var ronnieDos = {
    nombre: 'ronnie',
    edad: 22,
};
console.log(ronnieDos);
