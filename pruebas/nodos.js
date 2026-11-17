const Nodo = require("../src/Nodo.js");

const atencion1 = new Nodo({
  fecha: '02/02',
  motivo: 'Vacunación',
  veterinario: 'Dra. Ríos',
  costo: 85000
  });


const atencion2 = new Nodo({
  fecha: '15/03',
  motivo: 'Control de peso',
  veterinario: 'Dr. Gómez',
  costo: 40000
});

const atencion3 = new Nodo({
  fecha: '20/05',
  motivo: 'Limpieza dental',
  veterinario: 'Dra. Ríos',
  costo: 150000
});

atencion1.siguiente = atencion2;
atencion2.siguiente = atencion3;
atencion3.siguiente = null;

const cabeza=atencion1;

let actual = cabeza;

while(actual != null){
  console.log(actual.dato);
  actual = actual.siguiente;
  }

let totalCosto = 0;
actual = cabeza;

while(actual !=null){
  totalCosto += actual.dato.costo;
  actual = actual.siguiente;
}

console.log('Total costo de atención: ', totalCosto);