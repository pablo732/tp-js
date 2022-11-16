
function borrarFormulario() {

  // Obtengo los elementos HTML del DOM
  let inputNombre = document.getElementById("nombre");
  let inputApellido = document.getElementById("apellido");
  let inputCorreo = document.getElementById("correo");
  let inputCantidad = document.getElementById("cantidad");
  let inputCategoria = document.getElementById("categoria");
  let totalAPagar = document.getElementById("totalAPagar");

  // Reseteo el formulario a los valores predeterminados
  inputNombre.value = '';
  inputApellido.value = '';
  inputCorreo.value = '';
  inputCantidad.value = '';
  inputCategoria.value = 'Estudiante';
  totalAPagar.innerHTML = '';

};

const emailValido = correo => {
  return /[.*+\-?^${}()|[\]\\]/g, '\\$&';
}

function submitResumen() {

  validarFormulario();
  // Obtengo los elementos HTML del DOM
  let inputCategoria = document.getElementById("categoria");
  let valorTicket = 200;
  let inputCantidad = document.getElementById("cantidad");
  switch (inputCategoria.value) {
    case 'Estudiante':
      valorTicket = (valorTicket * 0.2) * inputCantidad.value;
      break;
    case 'Trainee':
      valorTicket = (valorTicket * 0.5) * inputCantidad.value;
      break;
    case 'Junior':
      valorTicket = (valorTicket * 0.85) * inputCantidad.value;
      break;
    default:
      break;
  }

  document.getElementById("totalAPagar").innerHTML = valorTicket;

};

function validarFormulario() {

  // Obtengo los elementos HTML del DOM
  let inputNombre = document.getElementById("nombre");
  let inputApellido = document.getElementById("apellido");
  let inputCorreo = document.getElementById("correo");
  let inputCantidad = document.getElementById("cantidad");
  let inputCategoria = document.getElementById("categoria");

  validarNombreFormulario(inputNombre);
  validarApellidoFormulario(inputApellido);
  validarCorreoFormulario(inputCorreo);
  validarCantidadFormulario(inputCantidad);
  validarCategoriaFormulario(inputCategoria);
  return;
}

function validarNombreFormulario(nombre) {
  if (nombre.value == "") {
    alert("Verifique nombre");
    nombre.classList.add("is-invalid");
    nombre.focus();
    return;
  }
}

function validarApellidoFormulario(apellido) {
  if (apellido.value == "") {
    alert("Verifique apellido");
    apellido.classList.add("is-invalid");
    apellido.focus();
    return;
  }
}

function validarCorreoFormulario(correo) {
  if (correo.value == "") {
    alert("Verifique correo");
    correo.classList.add("is-invalid");
    correo.focus();
    return;
  }
}

function validarCantidadFormulario(cantidad) {
  if (cantidad.value == "" || isNaN(cantidad.value) || cantidad.value <= 0) {
    alert("Verifique cantidad");
    cantidad.classList.add("is-invalid");
    cantidad.focus();
    return;
  }
}

function validarCategoriaFormulario(categoria) {
  if (categoria.value == "") {
    alert("Verifique categoria");
    categoria.classList.add("is-invalid");
    categoria.focus();
    return;
  }
}