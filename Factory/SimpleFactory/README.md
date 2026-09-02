# Simple Factory (Creacional)

El **Simple Factory** (o Fábrica Simple) es un patrón de diseño **creacional** que encapsula la lógica de creación de objetos en una sola clase o función centralizada, evitando que el cliente tenga que instanciar clases concretas directamente mediante la palabra `new`.

![Simple Factory](https://refactoring.guru/images/patterns/content/factory-method/factory-method-es.png?id=4040e2911292e5a623f10e36c380459d)

* **¿Qué problema resuelve?** Imagina que tu código necesita crear diferentes tipos de objetos (por ejemplo, enemigos de un juego como *Zombis*, *Orcos* o *Magos Oscuros*) en múltiples lugares de tu aplicación. 

  Si esparces la palabra `new` y la lógica de selección (`if/else` o `switch`) por todo el código cada vez que necesitas un enemigo, tu aplicación queda fuertemente acoplada a las clases concretas. 
  
  Si añades un nuevo tipo de enemigo o cambias sus parámetros de construcción, tendrás que modificar el código en decenas de sitios diferentes.

* **La solución del Simple Factory:** Creas una clase o función dedicada exclusivamente a la toma de decisiones de creación (la "fábrica simple"). El cliente le pide el objeto a la fábrica pasándole un parámetro o identificador, centralizando toda la lógica de instanciación en un solo lugar y aislando al resto del sistema de los cambios en las clases concretas.

---

## Estructura y Componentes

1. **El Producto (`Product`)**: Es la interfaz o clase abstracta común que define los objetos que la fábrica va a crear (ej. interfaz `Enemigo`).

2. **Los Productos Concretos (`ConcreteProductA`, `ConcreteProductB`)**: Las implementaciones reales de los objetos (ej. `Orco`, `Zombi`).

3. **La Fábrica Simple (`SimpleFactory`)**: Una clase (o función estática) que contiene un método central con una estructura condicional (`switch` o `if-else`) encargada de decidir qué clase concreta instanciar en función de los parámetros recibidos.

[![](https://img.plantuml.biz/plantuml/svg/bL7DQW913BuFp3lag1INdfUog8M2ju9F46T72SvEbapcOAtltd5n_OD2Uyttbo-P9qNHt0LhqfvYZu8Tk80fBLI5Dbdzod5SqvU7rtlE1jr-9vnZwpYmW0h6L20VrHfhAAgNBJeFdy9jTifmj0RW1RZtWeuuJgOrf98HTzQSpfeXzifV_5Um_AjWJLqV_0SMZHn6qR4SGicTm8b76JqdIZsF9iLjd3_ulGSghSz6m_1Q-EsxgcvrVWEMrZmkL5NDxMZri0yqrbnIPhFcgK0DEJqpxlGNSEvZMzxy0m00)](https://editor.plantuml.com/uml/bL7DQW913BuFp3lag1INdfUog8M2ju9F46T72SvEbapcOAtltd5n_OD2Uyttbo-P9qNHt0LhqfvYZu8Tk80fBLI5Dbdzod5SqvU7rtlE1jr-9vnZwpYmW0h6L20VrHfhAAgNBJeFdy9jTifmj0RW1RZtWeuuJgOrf98HTzQSpfeXzifV_5Um_AjWJLqV_0SMZHn6qR4SGicTm8b76JqdIZsF9iLjd3_ulGSghSz6m_1Q-EsxgcvrVWEMrZmkL5NDxMZri0yqrbnIPhFcgK0DEJqpxlGNSEvZMzxy0m00)

---

## Sintaxis General (Estructura Base)

```typescript
// 1. Producto común
interface Producto {
  operacion(): string;
}

// 2. Productos concretos
class ProductoA implements Producto {
  public operacion(): string { return "Resultado del ProductoA"; }
}

class ProductoB implements Producto {
  public operacion(): string { 
    return "Resultado del ProductoB"; 
  }
}

// 3. Fábrica Simple
class SimpleFactory {
  public static crearProducto(tipo: string): Producto {
    switch (tipo) {
      case 'A':
        return new ProductoA();
      case 'B':
        return new ProductoB();
      default:
        throw new Error(`Tipo de producto desconocido: ${tipo}`);
    }
  }
}

// Uso por el cliente
const producto = SimpleFactory.crearProducto('A');
console.log(producto.operacion());

```

---

## Implementación

#### El Generador de Ítems del Cofre (Chest Item Spawner)

Imaginemos que en nuestro RPG, dependiendo del tipo de recompensa o del cofre abierto por el jugador, el sistema genera automáticamente el objeto correcto del inventario usando una fábrica simple.

* *Enlace* [`ItemFactory.ts`](./ejemplos/ItemFactory.ts)
---

## 🛠️ Ejercicio Práctico: El Sistema de Armas del Arsenal

[`Enlace de Solución`](./ejemplos/WeaponFactory.ts)

### Enunciado:

Imagina que estás diseñando el sistema de equipamiento y combate de tu juego. 

Los héroes pueden equiparse con diferentes tipos de armas al ingresar a una zona de combate (por ejemplo, **Espada** para combate cuerpo a cuerpo, **Arco** para distancia, o **Bastón** para magia).

No quieres instanciar las armas directamente con `new` en la lógica de selección de los personajes, sino utilizar el **Patrón Simple Factory** para centralizar la creación mediante una clase o método estático que reciba el tipo de arma deseado.

Debes diseñar la arquitectura con los siguientes elementos:

1. Una interfaz **`Arma`** que tenga propiedades como `nombre: string`, `dano: number` y un método: `atacar(): void`.
2. Dos o tres clases concretas que implementen `Arma` (ej: `Espada`, `Arco`, `Baston`).
3. Una clase centralizada llamada **`ArmaFactory`** que contenga un método estático `crearArma(tipo: string): Arma` encargado de evaluar la condición y construir el arma correcta.
