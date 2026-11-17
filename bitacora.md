# Bitácora: lista enlazada de atenciones veterinarias

## Estructura de la lista

Cada atención se guarda en un nodo. El campo `siguiente` conecta un nodo con el próximo, y `null` marca el final de la lista. La variable `cabeza` apunta al primer nodo.

```text
cabeza
  │
  ▼
┌───────────────────────────┐     siguiente     ┌───────────────────────────┐     siguiente     ┌───────────────────────────┐
│ Nodo 1                    │ ─────────────────▶│ Nodo 2                    │ ─────────────────▶│ Nodo 3                    │
│ Vacunación · 02/02        │                   │ Control de peso · 15/03   │                   │ Limpieza dental · 20/05   │
│ costo: $85.000            │                   │ costo: $40.000            │                   │ costo: $150.000           │
└───────────────────────────┘                   └───────────────────────────┘                   └───────────────────────────┘
                                                                                                             │
                                                                                                             ▼
                                                                                                            null
```

El recorrido comienza en `cabeza`, procesa el nodo actual y avanza usando `actual = actual.siguiente`. Se detiene cuando `actual` vale `null`. Con los tres nodos conectados, el costo total recorrido es **$275.000**.

## Simulación: pérdida del primer enlace

Para romper la conexión entre el primer y el segundo nodo, se asigna `null` al campo `siguiente` del primer nodo:

```js
atencion1.siguiente = null;
```

La lista accesible desde `cabeza` queda así:

```text
cabeza
  │
  ▼
┌───────────────────────────┐
│ Nodo 1                    │
│ Vacunación · 02/02        │
│ costo: $85.000            │
└───────────────────────────┘
  │ siguiente
  ▼
 null

┌───────────────────────────┐     siguiente     ┌───────────────────────────┐
│ Nodo 2                    │ ─────────────────▶│ Nodo 3                    │ ──▶ null
│ Control de peso · 15/03   │                   │ Limpieza dental · 20/05   │
│ costo: $40.000            │                   │ costo: $150.000           │
└───────────────────────────┘                   └───────────────────────────┘
   (ya no se alcanza desde cabeza)
```

### ¿Qué ocurre durante el recorrido?

1. Se empieza en `cabeza`, que todavía apunta al nodo de vacunación.
2. Se procesa ese nodo y se consulta su campo `siguiente`.
3. Como ahora contiene `null`, el ciclo termina.

Por eso, el recorrido solo visita la primera atención y el cálculo del costo suma **$85.000**. Los nodos de control de peso y limpieza dental siguen existiendo, y conservan su enlace entre ellos, pero ya no se pueden visitar comenzando desde `cabeza`: se perdió la referencia que permitía llegar al nodo 2. Esto muestra que en una lista enlazada cada conexión es necesaria para mantener accesibles los nodos siguientes.
