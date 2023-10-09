const alumnosBD = [];

class Persona {
  static palabra = /^[a-zA-Z]{2,16}$+/;

  #nombre;
  #apellidos;
  #edad;

  constructor(nombre, apellidos, edad) {
    this.#nombre = nombre;
    this.#apellidos = apellidos;
    this.#edad = edad;
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
}

class Materia {
  #nombre;
  #clave;

  constructor(nombre) {
    this.#nombre = nombre;
    this.#clave = Math.floor(Math.random() * 50);
  }

  set setNombre(nombre) {
    try {
      if (Persona.palabra.test(nombre)) {
        this.#nombre = nombre;
      } else {
        throw "Error, ingreso caracteres alafanuméricos";
      }
    } catch (e) {
      alert(`${e}`);
    }
  }
  get getNombre() {
    return this.#nombre;
  }

  get getClave() {
    return this.#clave;
  }

  toString() {
    return `clave: ${this.#clave} - Materia: ${this.#nombre}`;
  }
}

class Grupo {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  set setGrupo(grupo) {
    this.#nombre = this.#nombre;
  }

  get getNombre() {
    return (this.#nombre = nombre);
  }
}

class Profesor extends Persona {
  static id = 0;
  #idProfesor;

  constructor(nombre, apellido, edad) {
    super(nombre, apellido, edad);
    this.#idProfesor = ++Profesor.id;
  }
  get getId() {
    return this.#idProfesor;
  }

  toString() {
    return `Profesor: ${super.toString()} , ID: ${this.#idProfesor}`;
  }
}

class Alumno extends Persona {
  static id = 0;

  #idAlumno;
  #materias;

  constructor(nombre, apellido, edad) {
    super(nombre, apellido, edad);
    this.#idAlumno = ++Alumno.id;
    this.#calificaciones = [];
    this.#materias = [];
  }

  inscribirMateria(materia) {
    this.#materias.push(materia);
  }

  get getId() {
    return this.#idAlumno;
  }

  toString() {
    return `ID: ${this.#idAlumno}, Alumno: ${super.toString()}`;
  }
}

//funciones

function limpiarDatos() {
  const tbody = document.getElementById("datos-alumnos");
  tbody.innerHTML = "";
}

function altaAlumno() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;

  alumnosBD.push(new Alumno(nombre, apellido, edad));
}

function listarALumnos() {
  limpiarDatos();
  const tbody = document.getElementById("datos-alumnos");
  tbody.innerHTML = "";
  let celdilla = ``;
  for (const alumno of alumnosBD) {
    celdilla = `
    <tr>
      <td>${alumno.getNombre}</td>
      <td>${alumno.getApellidos}</td>
      <td>${alumno.getEdad}</td>
      <td>${alumno.get}</td>
      <td>${almuno}</td>
      <td><button class="" type="button" onclick="eliminarAlumno()">Eliminar</button></td>
    </tr>
    `;

    tbody += celdilla;
  }
}

function eliminarAlumno(indice) {
  alumnosBD.splice(indice, 1)
}
