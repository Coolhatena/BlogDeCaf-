// window.addEventListener('load', () => {
// 	console.log(1)
// })

// window.onload = () => {
// 	console.log(2)
// }

// document.addEventListener('DOMContentLoaded', () => {
// 	console.log(3)
// })

// window.onscroll = () => console.log("Scrolling")

let datos = {
	nombre: '',
	email: '',
	mensaje: ''
}
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const btnEnviar = document.querySelector('.boton--primario')
const formulario = document.querySelector('.formulario')


let handleChange = e => {
	datos[e.target.id] = e.target.value
	// console.log(datos)
}

let mostrarAlerta = (mensaje, tipo = 'confirmacion') => {
	// Crear elemento html
	const alerta = document.createElement('P');
	alerta.textContent = mensaje
	alerta.classList.add(tipo);

	// Hacer que aparezca en pantalla
	formulario.appendChild( alerta )

	// Hacer que el mensaje desaparezca despues de n segundos
	setTimeout( () => {
		alerta.remove();
	}, 5000)	
}

// btnEnviar.addEventListener('click', e => {
// 	e.preventDefault()
// 	console.log('Enviado formulario...')
// })

formulario.addEventListener('submit', e => {
	e.preventDefault()
	// Validar formulario
	const {nombre, email, mensaje} = datos

	if (nombre == '' || email == '' || mensaje == ''){
		mostrarAlerta('Todos los campos son obligatorios', 'error')
		return
	}

	mostrarAlerta('Mensaje enviado correctamente')
	console.log('Enviando datos de formulario...')
})

nombre.addEventListener('input', handleChange)
email.addEventListener('input', handleChange)
mensaje.addEventListener('input', handleChange)
