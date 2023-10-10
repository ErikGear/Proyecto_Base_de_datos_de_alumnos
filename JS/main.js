const alumnosBD = [];

const alertaExitosa = document.getElementById("alerta-exitosa");
const alertaAdvertencia = document.getElementById("alerta-advertencia");
alertaExitosa.style.display = "none";
alertaAdvertencia.style.display = "none";
class Persona {
  static palabra = /^[a-zA-Z]{2,16}$/;

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
  #calificaciones;

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

  listarALumnos(alumnosBD);
}

function listarALumnos(alumnos) {
  limpiarDatos();
  const tbody = document.getElementById("datos-alumnos");
  tbody.innerHTML = "";

  alumnos.forEach((alumno, indice) => {
    let filaAlumno = ``;

    filaAlumno = `
    <tr>
      <td>${alumno.getId}</td>
      <td>${alumno.getNombre}</td>
      <td>${alumno.getApellidos}</td>
      <td>${alumno.getEdad}</td>
      <td> - </td>
      <td> - </td>
      <td><button class="btn btn-danger" type="button" onclick="eliminarAlumno(${indice})">Eliminar</button></td>
    </tr>
    `;

    tbody.innerHTML += filaAlumno;
  });
}

function ordernarAlfabeticamente() {
  let alumnosOrdenados = alumnosBD.sort((a, b) => {
      if (a.nombre > b.nombre) {
          return 1
      }
      if (a.nombre < b.nombre) {
          return -1
      }
      return 0
  })
  listarALumnos(alumnosOrdenados)
}

function eliminarAlumno(indice) {
  alumnosBD.splice(indice, 1);
  listarALumnos(alumnosBD);
}

function buscarAlumno() {
  let buscarAlumno = document.getElementById("busquedaAlumno").value
  const nombreCapitalizado = buscarAlumno.charAt(0).toUpperCase() + buscarAlumno.slice(1)
  let AlumnoFiltrado = alumnosBD.filter( alumno => alumno.nombre.includes(nombreCapitalizado))
  if (AlumnoFiltrado.length == 0) {
      
  } else {
     listarALumnos(AlumnoFiltrado)
  } 
  
}

listarALumnos(alumnosBD);
