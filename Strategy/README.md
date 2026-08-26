# Strategy

**Strategy** es un patrón de diseño de **comportamiento** que te permite definir una familia de algoritmos, encapsular cada uno en una clase separada y hacer que sus objetos sean intercambiables sobre la marcha.

*Varias estrategias para llegar al aeropuerto.*
![Patrón Strategy](https://refactoring.guru/images/patterns/content/strategy/strategy-comic-1-es.png)


* **¿Qué problema resuelve?** 

Imagina que en tu juego RPG tienes personajes (como un Guerrero o un Mago) que pueden atacar de distintas formas (`con espada`, `magia`, `arcos` o `fuego`). 

Si resuelves esto usando un bloque gigante de `if/else` o `switch` dentro de la clase del `Personaje`, tu código se vuelve inmantenible cada vez que agregas un arma nueva.

* **La solución del Strategy:** 

Sacas los **algoritmos de ataque fuera** de la clase principal y los conviertes en **clases independientes** que implementan **una interfaz común**. El personaje simplemente guarda una referencia a la estrategia actual y la ejecuta, sin importarle qué tipo de ataque sea.

---

## 2. Estructura y Componentes

1. **La Interfaz de la Estrategia (`Strategy`)**: Define el contrato común que todos los algoritmos deben cumplir (ej. `ejecutarAtaque()`).

2. **Las Estrategias Concretas (`ConcreteStrategyA`, `ConcreteStrategyB`)**: Son las clases independientes que implementan la interfaz con diferentes variaciones del algoritmo (ej. `AtaqueConEspada`, `AtaqueConMagia`).

3. **El Contexto (`Context`)**: Es la clase principal (ej. el `Personaje`) que contiene una referencia a una estrategia y la invoca. Permite cambiar de estrategia dinámicamente mediante un método setter.

[![](https://img.plantuml.biz/plantuml/svg/fL7DIWD13BuFp3laM2bRUbv4kbKF1V7I9qXdup1sToAPZDYgx-xKikil23RNxozViaYAehdlh4dR41zGi0VNOKgDgeHDLbevZkkm9vX_vcpGRRrmZgtZZWLKCAO2KLHhh0bHIUxG4QmBekHty6mDb9a2tPFB9RRfF4lGdYTdDJnoQArvFMZVu-6IenDI6lJDgGRBVnWeFUaWgu3IqIfWFTOQB1FfzGXFVcEE4Lztk64V75xHBNbsuVicu_NENsQpdpVvYx2qPcZ1LNNnyOmQSi93m89YMzx_1W00)](https://editor.plantuml.com/uml/fL7DIWD13BuFp3laM2bRUbv4kbKF1V7I9qXdup1sToAPZDYgx-xKikil23RNxozViaYAehdlh4dR41zGi0VNOKgDgeHDLbevZkkm9vX_vcpGRRrmZgtZZWLKCAO2KLHhh0bHIUxG4QmBekHty6mDb9a2tPFB9RRfF4lGdYTdDJnoQArvFMZVu-6IenDI6lJDgGRBVnWeFUaWgu3IqIfWFTOQB1FfzGXFVcEE4Lztk64V75xHBNbsuVicu_NENsQpdpVvYx2qPcZ1LNNnyOmQSi93m89YMzx_1W00)

---

## 3. Sintaxis General (Estructura Base)

```typescript
// 1. Interfaz común
interface Estrategia {
    ejecutar(): void;
}

// 2. Estrategias concretas
class EstrategiaA implements Estrategia {
    public ejecutar(): void { console.log("Ejecutando algoritmo A"); }
}

class EstrategiaB implements Estrategia {
    public ejecutar(): void { console.log("Ejecutando algoritmo B"); }
}

// 3. Contexto que usa la estrategia
class Contexto {
    constructor(private estrategia: Estrategia) {}

    public cambiarEstrategia(nuevaEstrategia: Estrategia): void {
        this.estrategia = nuevaEstrategia;
    }

    public hacerAlgo(): void {
        this.estrategia.ejecutar();
    }
}

```

---

## 🛠️ Ejercicio Práctico: El Sistema de Movimiento del RPG
### Enunciado:

Imagina que en tu juego RPG, los personajes pueden moverse por diferentes tipos de terreno (por ejemplo, **Terreno Normal**, **Terreno Pantanoso** o **Terreno Montañoso**). El costo de energía o la velocidad con la que se desplazan cambia radicalmente dependiendo del terreno, pero no quieres llenar la clase `Personaje` con condiciones `if/else` complejas para calcular el movimiento.

Debes aplicar el **Patrón Strategy** para modelar esto:

1. Crea una interfaz llamada **`EstrategiaMovimiento`** que tenga un método: `moverse(nombrePersonaje: string): void`.
2. Crea tres estrategias concretas que implementen dicha interfaz:
* **`MovimientoPie`** (ej: imprime que camina con normalidad consumiendo poca energía).
* **`MovimientoNadando`** (ej: imprime que avanza con dificultad por el agua).
* **`MovimientoMontando`** (ej: imprime que galopa a gran velocidad sobre una montura).


3. Crea una clase llamada **`Viajero`** (el contexto) que reciba un nombre y una estrategia de movimiento inicial, que tenga un método `cambiarTerreno(nuevaEstrategia: EstrategiaMovimiento)` y un método `viajar()` que invoque la estrategia.

---
