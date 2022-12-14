
// Utilizando el querido array de objetos "Pizzas馃崟", realizar el siguiente desaf铆o: 
class pizza {
  constructor (id, imagen, nombre, ingredientes, precio) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
}

// 馃憠 A cada Pizza, agregarle una imagen. 
const pizzas = [
  new pizza (1, "./img/pizza1.png" , "mozzarella", ["mozzarella", "salsa de tomate", "jam贸n"], 550), 
  new pizza (2, "./img/pizza2.png", "de jam贸n y morrornes", ["jam贸n", "morr贸n", "mozzarella", "salsa de tomate"], 750),
  new pizza (3, "./img/pizza3.jpg" , "fugazzetta", ["cebolla", "mozzarella"], 600), 
  new pizza (4, "./img/pizza4.jpg" , "napolitana", ["mozzarella", "tomate", "salsa de tomate"], 500), 
  new pizza (5, "./img/pizza5.webp" , "cuatro quesos", ["mozzarella", "queso az煤l", "fontina", "parmesano"], 1000), 
  new pizza (6, "./img/pizza6.jpg" , "de jam贸n y palmitos", ["jam贸n", "mozzarella", "salsa rosa", "palmitos", "morr贸n"], 800), 
  new pizza (7, "./img/pizza7.jpg" , "calabresa", ["mozzarella", "salsa de tomate", "longaniza"], 700), 
  new pizza (8, "./img/pizza8.jpg" , "de r煤cula", ["r煤cula", "parmesano", "mozzarella", "salsa de tomate", "jam贸n crudo"], 1200), 
  new pizza (9, "./img/pizza9.webp" , "hawaiana", ["anan谩", "mozzarella", "salsa de tomate", "jam贸n", "bacon"], 800), 
  new pizza (10, "./img/pizza10.jpeg" , "de roquefort", ["mozzarella", "salsa de tomate", "queso az煤l", "aceitunas negras"], 750), 
];


const resultado = document.getElementById("card_encontrada");
const formulario = document.getElementById("form");
const input_buscador = document.querySelector(".form__input");


// 馃憠 Guardar el array en el local storage. 
localStorage.setItem('pizzas', JSON.stringify(pizzas));


const buscar_pizza = (value) => (JSON.parse(localStorage.getItem('pizzas')))[value-1];


// 馃憠 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 馃帹). 
const mostrar_resultado = (pizza) => {
  // 馃毃 Si no coincide con ning煤n id, renderizar un mensaje de error.
  if (!pizza) {
    resultado.innerHTML = `
    <div class="card_resultado">
    <h2 class="error"> No vendemos esta pizza </h2>
    </div>`;
  } else {
    resultado.innerHTML = `
    <div class="card_resultado">
    <img class="img_pizza" src="${pizza.imagen}" alt="pizza ${pizza.id}">
    <h2 class="titulo">PIZZA ${pizza.nombre.toUpperCase()}</h2>
    <h3 class="precio"> Precio: $${pizza.precio} 馃崟</h3>
    <ul/>
    <b/>Ingredientes:</b>
    <li/>${pizza.ingredientes[0]}</li>
    <li/>${pizza.ingredientes[1]}</li>
    <li/>${pizza.ingredientes[2] || ``}</li>
    <li/>${pizza.ingredientes[3] || ``}</li>
    <li/>${pizza.ingredientes[4] || ``}</li>
    </ul>
    </div>
    `;
  }
};


// Deberemos colocar un numero en el input y, al apretar el bot贸n, deber谩 renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.
// 馃憠 Debajo del card tiene que haber un input y un bot贸n. 
const iniciar_busqueda = (e) => {
  e.preventDefault();
  const valor_buscado = input_buscador.value;
  const pizza_buscada = buscar_pizza (Number(valor_buscado));
  mostrar_resultado(pizza_buscada);
};


const init = () => {
  formulario.addEventListener ("submit", iniciar_busqueda);
};


// Ejecutando en primera l铆nea:
init();