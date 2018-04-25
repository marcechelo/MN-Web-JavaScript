let hola: string | number;
const adios = 'Adios';
hola = 'chao';
hola = 1;
//console.log(hola);

//tipos de variables
let nombre: String = 'marcelo';
let edad: number = 22;
let casado: boolean = false;
let fecha: Date = new Date();

class Usuario {
    public nombre: string;
    private casado: boolean;
    protected edad: number;

    constructor(nombre: string,
                casado: boolean,
                edad: number) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
}

let ronnie = {
    nombre: 'ronnie',
    edad: 22,
    casado: false
};

let marcelo: Usuario = new Usuario('marcelo', false, 22);
//console.log(marcelo);
//console.log(ronnie);

class UsuarioDos {
    constructor(public nombre: string,
                private _casado: boolean,
                protected _edad: number) {

    }

    get casado() {
        return this._casado;
    }

    set casado(casado: boolean) {
        this._casado = casado;
    }

    public imprimirUsuario(saludo: string): string {
        //temple String
        return `${saludo}. Mi nombre es ${this.nombre}, estoy casado: ${this.casado}, mi edad es ${this._edad}`;
    }
}

let marceloDos: UsuarioDos = new UsuarioDos('marcelo', false, 22);
console.log(marceloDos.imprimirUsuario('hola'));

let ronnieDos: UsuarioTres = {
    nombre: 'ronnie',
    edad: 22,

};

interface UsuarioTres {
    nombre: string;
    casado?: boolean;
    edad: number;
    imprimir?(saludo:string):string:
}

console.log(ronnieDos);
