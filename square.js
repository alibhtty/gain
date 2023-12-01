// CUADROS RANDOM
/* const squares = document.querySelector('.squares');
for (var i = 1; i < 365; i++) {
  const level = Math.floor(Math.random() * 3);  
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
} */



// square.js
// Selecciona el elemento del DOM con la clase '.squares'
/* const squares = document.querySelector('.squares');

// Agrega dos cuadros vacíos al principio para los días antes del 1 de noviembre
for (let i = 0; i < 2; i++) {
  squares.insertAdjacentHTML('beforeend', '<li></li>');
}

// Itera sobre cada objeto en el array 'diasDelAño'
for (let i = 0; i < diasDelAño.length; i++) {
  // Obtiene el nivel y el número del día actual
  const level = diasDelAño[i].nivel;
  const dia = diasDelAño[i].dia;
  
  // Inserta un nuevo elemento 'li' al final del elemento '.squares'
  //squares.insertAdjacentHTML('beforeend', `<li data-level="${level}">${dia}</li>`);  /* CON # DIA /
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
} */





// CUADROS  –––  square.js
// Selecciona el elemento del DOM con la clase '.squares'
const squares = document.querySelector('.squares');

// Agrega dos cuadros vacíos al principio para los días antes del 1 de noviembre
for (let i = 0; i < 2; i++) {
  squares.insertAdjacentHTML('beforeend', '<li></li>');
}

// Itera sobre cada objeto en el array 'diasDelAño'
for (let i = 0; i < diasDelAño.length; i++) {
  // Obtiene el nivel y el número del día actual
  const level = diasDelAño[i].nivel;
  const dia = diasDelAño[i].dia;
  
  // Comprueba si el nivel es 3
  if (level === 3) {
    // Si el nivel es 3, agrega las imágenes de perfil al cuadro
    squares.insertAdjacentHTML('beforeend', `
      <li data-level="${level}">
        <img src="./assets/usuario/alibhtty.jpg" class="perfil" />
        <img src="./assets/usuario/sebas.jpg" class="perfil" />
      </li>
    `);
  } else {
    // Si el nivel no es 3, agrega el cuadro sin imágenes de perfil
    squares.insertAdjacentHTML('beforeend', `<li data-level="${level}">        </li>`); /* ${dia} */
  }
}










/* ========= HEADER TOP ========= */
window.addEventListener('scroll', function() {
  const titulo = document.getElementById('titulo');
  const days = document.querySelector('.days');
  const leyenda = document.querySelector('.leyenda');

  if (window.scrollY > titulo.offsetHeight) {
    // Si el usuario ha hecho scroll más allá del título, muestra los días y la leyenda
    days.style.display = 'grid';
    days.style.paddingLeft = '18%'; // Añade padding-left
    days.style.paddingTop = '1em'; 
    leyenda.style.display = 'block'; // Muestra la leyenda
  } else {
    // Si el usuario está en la parte superior de la página, oculta los días y la leyenda
    days.style.display = 'none';
    leyenda.style.display = 'none'; // Oculta la leyenda
  }
});


/* window.addEventListener('scroll', function() {
  const titulo = document.getElementById('titulo');
  const days = document.querySelector('.days');

  if (window.scrollY > titulo.offsetHeight) {
    // Si el usuario ha hecho scroll más allá del título, muestra los días
    days.style.display = 'grid';
    days.style.paddingLeft = '18%'; // Añade padding-left
    days.style.paddingTop = '1em'; 
  } else {
    // Si el usuario está en la parte superior de la página, oculta los días
    days.style.display = 'none';
  }
}); */



/* ============ ANIMACION HEADER ============ */
window.addEventListener('scroll', function() {
  const titulo = document.getElementById('titulo');
  const days = document.querySelector('.days');
  const leyenda = document.querySelector('.leyenda');

  if (window.scrollY > titulo.offsetHeight) {
    // Si el usuario ha hecho scroll más allá del título, muestra los días y la leyenda
    days.style.opacity = '1';
    leyenda.style.opacity = '1';
  } else {
    // Si el usuario está en la parte superior de la página, oculta los días y la leyenda
    days.style.opacity = '0';
    leyenda.style.opacity = '0';
  }
});






// square.js
// Selecciona el elemento del DOM con la clase '.squares'
/* const squares = document.querySelector('.squares');

// Itera sobre cada objeto en el array 'diasDelAño'
for (let i = 0; i < diasDelAño.length; i++) {
  // Obtiene el nivel del día actual
  const level = diasDelAño[i].nivel;
  const dia = diasDelAño[i].dia;
  
  // Inserta un nuevo elemento 'li' al final del elemento '.squares'
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}">${dia}</li>`);
} */

