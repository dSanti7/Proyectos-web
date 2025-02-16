
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      // Desactivar todas las secciones
      const allSections = document.querySelectorAll('.content-section');
      allSections.forEach(section => {
        section.classList.remove('active');

      });
      const buttonsOthers = document.querySelectorAll('.toggle-btn');
      buttonsOthers.forEach(button => {
        button.classList.remove('activeBtn');
      });

      // Activar la sección objetivo
      if (targetElement) {
        targetElement.classList.add('active');
        button.classList.add('activeBtn'); // Activar el botón 
      }
    });
  });
});
//Botón de play menu
document.querySelector('.boton').addEventListener('click', function () {
  const ventanaCodigo = document.querySelector('.ventanaCodigo');

  const ventanaResultado = document.querySelector('.ventanaResultado');
  ventanaCodigo.style.transition = 'all 0.5s ease';
  if (ventanaResultado.style.display === 'block') {

    ventanaCodigo.style.marginLeft = '25%';
    ventanaResultado.style.display = 'none';

  } else {

    ventanaCodigo.style.marginLeft = '0px';
    setTimeout(() => {
      ventanaResultado.style.display = 'block';
    }, 600);
  }

});


//botón de apliar

document.querySelector('.botonAmpliar').addEventListener('click', function () {
  const ventanaCodigo = document.querySelector('.ventanaCodigo');
  const ventanaResultado = document.querySelector('.ventanaResultado');
  
  const aficiones = document.querySelector('.aficiones');
  const ventanaContainer = document.querySelector('.ventanaContainer');
  const inicioBackground = getComputedStyle(document.querySelector('.intro')).background;
  ventanaResultado.style.transition = 'all 0.5s ease';
  if (ventanaCodigo.style.display === 'block' || ventanaCodigo.style.display === '') {
    ventanaCodigo.style.display = 'none';  
    ventanaResultado.style.marginLeft = 'auto';
    ventanaResultado.style.marginRight = '0%';
    ventanaContainer.style.marginBottom = '50px'; 
    document.body.style.background = inicioBackground;
    ventanaResultado.style.maxHeight = '100%';
    ventanaResultado.style.width = '100%';
    ventanaResultado.style.maxWidth = '100%';
    aficiones.style.display = 'none'; 
  } else {
    ventanaResultado.style.marginRight = '0px';
    ventanaResultado.style.maxHeight = '500px';
    ventanaResultado.style.maxWidth = '50%';
    ventanaResultado.style.width = '49%';
    aficiones.style.display = 'block'; 

    setTimeout(() => {
      document.body.style.background = '#2b2b2b';
      ventanaCodigo.style.display = 'block';
      ventanaContainer.style.marginBottom = '0px';
      
    }, 600);
  }
});