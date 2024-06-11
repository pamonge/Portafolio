//------------------------------- Emails ----------------------------------

const btn = document.getElementById('button');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');


//Validacion de campos

function errorHandler (value) {
    value.placeholder = 'Por favor, complete el campo! Gracias.';
    value.classList.remove('rm-error')
    value.classList.add('error')
}

function fieldCheck (campo) {
	if (!campo.validity.valueMissing) {
		const errorMessage = campo.nextElementSibling;
		errorMessage.textContent = '';
		campo.classList.remove('error');
		campo.classList.add('rm-error');
		btn.disabled = false;

	} else {
		campo.classList.add('error');
		btn.disabled = true;
		errorHandler(campo);
	}
}

document.getElementById('form').addEventListener('submit', function(event) {
	event.preventDefault();

 	btn.value = 'Enviando...';

 	const serviceID = 'default_service';
 	const templateID = 'template_4akq7qa';

 	emailjs.sendForm(serviceID, templateID, this).then(() => {
	 	btn.value = 'ENVIAR MENSAJE';
	 	alert('Mensaje enviado correctamente!!');
		form.blur();
	 	form.reset();
 	}, (err) => {
	 	btn.value = 'ENVIAR MENSAJE';
	 	alert(JSON.stringify(err));
 	});
	
});

const camposFormulario = document.querySelectorAll('[required]')

camposFormulario.forEach((campo) => {
	campo.addEventListener('blur', () => fieldCheck(campo))
	campo.addEventListener('invalid', evento => evento.preventDefault())
})

//--------------------------- Menu hamburguesa ----------------------------

const btnMenuHamburguesa = document.getElementById("btn-menu-burguer");
const navbar = document.getElementById("navbar");
const body = document.getElementById("body");

//funcionalidad menu hamburguesa
btnMenuHamburguesa.addEventListener("click", () => {
	navbar.classList.toggle("visible");
});

navbar.addEventListener('mouseleave', () => {
  navbar.classList.toggle('visible');
})


// ------------------------- ScrollReveal
const sr = ScrollReveal({
  distance: '65px',
  duration: 2000,
  delay: 450,
  reset: true
})

sr.reveal('.hero-text', {delay: 400, origin: 'top'})

sr.reveal('.hero-img', {delay: 400, origin: 'top'})

sr.reveal('.icons', {delay: 400, origin: 'left'})

sr.reveal('.scroll-down', {delay: 400, origin: 'right'})