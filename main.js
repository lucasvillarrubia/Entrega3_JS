
class pizza {
  constructor (id, nombre, ingredientes, precio) {
          this.id = id;
          this.nombre = nombre;
          this.ingredientes = ingredientes;
          this.precio = precio;
  }
}

const pizzas = [
  new pizza (1, "mozzarella", ["mozzarella", "salsa de tomate", "jamón"], 550), 
  new pizza (2, "de jamón y morrornes", ["jamón", "morrón", "mozzarella", "salsa de tomate"], 750),
  new pizza (3, "fugazzetta", ["cebolla", "mozzarella"], 600), 
  new pizza (4, "napolitana", ["mozzarella", "tomate", "salsa de tomate"], 500), 
  new pizza (5, "cuatro quesos", ["mozzarella", "queso azúl", "fontina", "parmesano"], 1000), 
  new pizza (6, "de jamón y palmitos", ["jamón", "mozzarella", "salsa de tomate", "palmitos", "salsa golf"], 750), 
  new pizza (7, "calabresa", ["mozzarella", "salsa de tomate", "longaniza"], 700), 
  new pizza (8, "de rúcula", ["rúcula", "parmesano", "mozzarella", "salsa de tomate", "jamón crudo"], 1200), 
  new pizza (9, "hawaiana", ["ananá", "mozzarella", "salsa de tomate", "jamón", "bacon"], 800), 
  new pizza (10, "de roquefort", ["mozzarella", "salsa de tomate", "queso azúl"], 750), 
];


const resultado = document.getElementById("card_encontrada");
const formulario = document.getElementById("form");
const input_buscador = document.querySelector(".form__input");

// Tenía pensado guardar de esta manera el array en el LocalStorage pero interviene con el render de la card.
// const pizzas_JSON = pizzas.forEach (pizza => JSON.parse (pizza));
// localStorage.setItem('pizzas', pizzas);

const buscar_pizza = (value) => pizzas.find((pizza) => pizza.id === value);

const renderResult = (pizza) => {
  if (!pizza) {
    resultado.innerHTML = `
    <div class="card_resultado">
    <h2 class="error"> No vendemos esta pizza </h2>
    </div>`;
  } else {
    resultado.innerHTML = `
    <div class="card_resultado">
      <h2 class="titulo">${pizza.nombre.toUpperCase()}</h2>
     <h3 class="precio"> Precio: $${pizza.precio} 🍕</h3>
     </div>
    `;
  }
};

const iniciar_busqueda = (e) => {
  e.preventDefault();
  const searchedValue = input_buscador.value;
  const searchedPizza = buscar_pizza (Number(searchedValue));
  renderResult(searchedPizza);
};

const init = () => {
  formulario.addEventListener ("submit", iniciar_busqueda);
};


// Ejecutando:
init();
