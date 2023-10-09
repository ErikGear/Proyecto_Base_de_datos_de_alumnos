class Persona {
  static idPersona = 0;
  static palabra = /^[a-zA-Z]{2,16}$+/;

  #nombre;
  #apellidos;
  #edad;
  #id;
  constructor(nombre, apellidos, edad) {
    this.#nombre = nombre;
    this.#apellidos = apellidos;
    this.#edad = edad;
    this.#id = ++Persona.idPersona;
  }

  get getNombre() {
    return this.#nombre;
  }
  set setNombre(nombre) {
    try {
      if (palabra.test(nombre)) {
        this.#nombre = nombre;
      } else {
        throw "Error, ingreso caracteres alafanuméricos";
      }
    } catch (e) {
      alert(`${e}`);
    }
  }

  get getApellidos() {
    return this.#apellidos;
  }
  set setApellidos(apellidos) {
    try {
      if (palabra.test(apellidos)) {
        this.#apellidos = apellidos;
      } else {
        throw "Error, ingreso caracteres alafanuméricos";
      }
    } catch (e) {
      alert(`${e}`);
    }
  }

  get getEdad() {
    return this.#edad;
  }
  set setEdad(edad) {
    try {
      if (isNaN(edad)) {
        throw "Edad, invalida";
      } else {
        const edadNumerica = parseInt(edad);
        if (edadNumerica < 0 || edadNumerica > 99) {
          throw "Edad invalida";
        } else {
          this.#edad = edadNumerica;
        }
      }
    } catch (e) {
      alert(`${e}`);
    }
  }

  get getId() {
    return this.#id;
  }
}

class Profesor extends Persona {

}

class Alumno extends Persona {
    
    constructor(){}
}
