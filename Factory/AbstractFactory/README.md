# Abstract Factory (Creacional)

El **Abstract Factory** es un patrón de diseño **creacional** avanzado que permite producir familias de objetos relacionados o dependientes (por ejemplo, conjuntos de equipamiento como espadas y escudos de estilo *Medieval* o *Sci-Fi*) sin especificar sus clases concretas.

![Abstract Factory](https://refactoring.guru/images/patterns/content/abstract-factory/abstract-factory-es.png)

Si ya dominas el *Simple Factory* y el *Factory Method*, dar el salto al **Abstract Factory (Fábrica Abstracta)** es el siguiente paso lógico.

Mientras que los dos anteriores se enfocan en crear **un solo producto a la vez** (una poción, un arma, un monstruo), el **Abstract Factory** va un nivel más arriba: se encarga de crear **familias de objetos relacionados o dependientes** que deben funcionar juntos, sin especificar sus clases concretas.

---

## 1. El Problema que Resuelve

Imagina que estás creando un simulador de tienda de muebles. Tu código está compuesto por clases que representan lo siguiente:

1. Una familia de productos relacionados, digamos: `Silla` + `Sofá` + `Mesilla`.

2. Algunas variantes de esta familia. 
  Por ejemplo los productos `Silla + Sofá + Mesilla` están disponibles en estas variantes:
  
    - Moderna. 
    - Victoriana.
    - ArtDecó.

<div align="center">

  ![Ejemplo de muebles](https://refactoring.guru/images/patterns/diagrams/abstract-factory/problem-es.png)
  <br>
  <em>Familias de productos y sus variantes.</em>
</div>

Necesitamos una forma de crear objetos individuales de mobiliario para que combinen con otros objetos de la misma familia. Los clientes se enfadan bastante cuando reciben muebles que no combinan.

Un sofá de estilo moderno no combina con unas sillas de estilo victoriano.

### Solución 

Para solucionar esto, el patrón **Abstract Factory** propone crear una interfaz central o fábrica abstracta que declare métodos de creación para cada producto que compone la familia (por ejemplo, `crearSilla()`, `crearSofa()` y `crearMesilla()`). Luego, creas fábricas concretas independientes para cada variante (como una `FabricaModerna` o una `FabricaVictoriana`); de esta manera, al utilizar la fábrica correspondiente, garantizas por diseño que todos los muebles que instancies pertenezcan obligatoriamente a la misma familia y combinen a la perfección.


## 2. Estructura Conceptual

1. **Productos Abstractos:** Varias interfaces que definen cada tipo de producto de la familia (ej. interfaz `Espada` e interfaz `Escudo`).

2. **Productos Concretos:** Las implementaciones específicas de cada familia (ej. `EspadaMedieval` + `EscudoMedieval`, y `EspadaSciFi` + `EscudoSciFi`).

3. **Fábrica Abstracta (`AbstractFactory`):** Una interfaz que declara un grupo de métodos de fábrica (uno para cada producto de la familia: `crearEspada()`, `crearEscudo()`).

4. **Fábricas Concretas:** Las clases que implementan la fábrica abstracta para construir una familia específica (`FabricaMedieval`, `FabricaSciFi`).

[![](https://img.plantuml.biz/plantuml/svg/jPJDJiGW58Nt9Bp3tQangPRbn9Wf9YRkZ3u1fTS9cHOQe0l_dif7yCLaSAJjT3fgeeikuBld7BZSTEcyiBvhQahSMkbMMD60h8LpXVTMbPt76sdqlNf2E1_Mb4AkLzPqkheojR7WhT0k8DIU4agKzcWVX4GeIXUOzDVXC_OHdYa1E0LfKTXRQwekR1V79mj8Ypq5V5Z0ANdTPCHZmjOt_ozZzeV6VLUIzClTj1Ywf8oEpg5bIgzcLNoYuXFLvoLIJlw3eB64JoNVfh3VfqmbqvGZkCCwCdHG8QYchR49enRstjyq9Rj3Tl6IPMao3cEs2UYV8wA-Q_DefEDZoFDvnFPTgC8MTOLQAW5dSP2s5qlJdMMNmyTSnA8PpdkUAjZOWUqwZ3bd0uTbE5huGtm0)](https://editor.plantuml.com/uml/jPJDJiGW58Nt9Bp3tQangPRbn9Wf9YRkZ3u1fTS9cHOQe0l_dif7yCLaSAJjT3fgeeikuBld7BZSTEcyiBvhQahSMkbMMD60h8LpXVTMbPt76sdqlNf2E1_Mb4AkLzPqkheojR7WhT0k8DIU4agKzcWVX4GeIXUOzDVXC_OHdYa1E0LfKTXRQwekR1V79mj8Ypq5V5Z0ANdTPCHZmjOt_ozZzeV6VLUIzClTj1Ywf8oEpg5bIgzcLNoYuXFLvoLIJlw3eB64JoNVfh3VfqmbqvGZkCCwCdHG8QYchR49enRstjyq9Rj3Tl6IPMao3cEs2UYV8wA-Q_DefEDZoFDvnFPTgC8MTOLQAW5dSP2s5qlJdMMNmyTSnA8PpdkUAjZOWUqwZ3bd0uTbE5huGtm0)

---

## Sintaxis General (Estructura Base)

```typescript
// 1. Productos Abstractos (Familias de productos)
interface ProductoA {
  operacionA(): string;
}

interface ProductoB {
  operacionB(): string;
}

// 2. Productos Concretos de la Familia 1
class ProductoA1 implements ProductoA {
  public operacionA(): string {
    return "Resultado del ProductoA1 (Familia 1)";
  }
}

class ProductoB1 implements ProductoB {
  public operacionB(): string {
    return "Resultado del ProductoB1 (Familia 1)";
  }
}

// 2. Productos Concretos de la Familia 2
class ProductoA2 implements ProductoA {
  public operacionA(): string {
    return "Resultado del ProductoA2 (Familia 2)";
  }
}

class ProductoB2 implements ProductoB {
  public operacionB(): string {
    return "Resultado del ProductoB2 (Familia 2)";
  }
}

// 3. Fábrica Abstracta
interface AbstractFactory {
  crearProductoA(): ProductoA;
  crearProductoB(): ProductoB;
}

// 4. Fábricas Concretas (Familia 1)
class Factory1 implements AbstractFactory {
  public crearProductoA(): ProductoA {
    return new ProductoA1();
  }
  public crearProductoB(): ProductoB {
    return new ProductoB1();
  }
}

// 4. Fábricas Concretas (Familia 2)
class Factory2 implements AbstractFactory {
  public crearProductoA(): ProductoA {
    return new ProductoA2();
  }
  public crearProductoB(): ProductoB {
    return new ProductoB2();
  }
}

// --- Código Cliente ---
function clienteCodigo(factory: AbstractFactory): void {
  const productoA = factory.crearProductoA();
  const productoB = factory.crearProductoB();

  console.log(productoA.operacionA());
  console.log(productoB.operacionB());
}

// Uso con la Familia 1
console.log("--- Usando la Fábrica 1 ---");
clienteCodigo(new Factory1());

// Uso con la Familia 2
console.log("\n--- Usando la Fábrica 2 ---");
clienteCodigo(new Factory2());
```

---

## Implementación

#### 1. El Generador de Equipamiento por Facción

Imaginemos que en nuestro RPG, al seleccionar el estilo visual o facción del personaje, el sistema genera de manera cohesiva el set completo de combate (arma y escudo) asegurando que pertenezcan a la misma categoría.

  - **Familia Medieval:** `EspadaMedieval` y `EscudoMedieval`.
  - **Familia Sci-Fi:** `PistolaLaser` y `EscudoDeEnergia`.

* *Enlace* [`equipmentFactory.ts`](./ejemplos/equipmentFactory.ts)

---

## 🛠️ Ejercicio Práctico: El Sistema de Temas de Interfaz (UI Themes)

[`Enlace de Solución`](./ejemplos/uiThemeFactory.ts)

### Enunciado:

Imagina que estás desarrollando la interfaz gráfica de configuración de tu videojuego. El jugador puede cambiar el **tema visual general** de los menús (por ejemplo, un estilo **Cyberpunk** lleno de neón o un estilo **Fantasy** rústico y pergamino).

Cada tema debe proveer un conjunto de componentes de interfaz que guarden estricta armonía visual y funcional. No puedes mezclar botones de neón con marcos de pergamino.

Debes diseñar la arquitectura utilizando el **Patrón Abstract Factory** con los siguientes elementos:

1. Dos interfaces de productos abstractos:
* **`BotonUI`** que contenga un método `renderizarBoton(): void`.
* **`PanelUI`** que contenga un método `renderizarPanel(): void`.


2. Clases concretas para cada familia de diseño:
* **Familia Cyberpunk:** `BotonNeon` y `PanelHolografico`.
* **Familia Fantasy:** `BotonRicoMadera` y `PanelPergamino`.


3. Una interfaz de fábrica abstracta llamada **`UIThemeFactory`** que declare los métodos de creación `crearBoton(): BotonUI` y `crearPanel(): PanelUI`.
4. Dos fábricas concretas (**`CyberpunkThemeFactory`** y **`FantasyThemeFactory`**) que implementen la fábrica abstracta para construir los componentes visuales correspondientes a su temática.

---

## ¿Cuándo vale la pena la complejidad extra del *Abstract Factory*?

El patrón *Abstract Factory* introduce una gran cantidad de interfaces y clases nuevas, por lo que puede ser excesivo para aplicaciones sencillas. Sin embargo, se vuelve indispensable en los siguientes escenarios:

### 1. Garantía de Compatibilidad entre Productos

Evita que el sistema mezcle elementos de familias distintas. Si un componente requiere que sus partes pertenezcan al mismo entorno o temática, la fábrica abstracta lo fuerza a nivel de tipos.

### 2. Aislamiento de Clases Concretas

El código cliente desacopla por completo la lógica de negocio de la instanciación de los objetos. Cambiar de una familia de productos a otra requiere únicamente cambiar la instancia de la fábrica inyectada.

### 3. Escalabilidad de Nuevas Familias

Añadir una nueva familia completa de productos (por ejemplo, añadir soporte para un sistema operativo Linux o una nueva facción de juego) es seguro y sencillo: solo creas las clases de productos concretos y su fábrica correspondiente sin alterar el código existente.

---

## Resumen: Evolución de las Fábricas

| Patrón | ¿Qué crea? | ¿Cómo decide? | ¿Cuándo se usa? |
| --- | --- | --- | --- |
| **Simple Factory** | Un producto aislado. | Mediante un `switch` o condicionales en una sola clase. | Sistemas sencillos donde solo quieres encapsular la creación con `new`. |
| **Factory Method** | Un producto aislado (pero delegado). | Mediante herencia y polimorfismo en subclases creadoras. | Cuando quieres extender fácilmente los tipos de un producto sin tocar código existente. |
| **Abstract Factory** | **Familias** de productos relacionados. | Mediante una interfaz que agrupa múltiples métodos de creación. | Cuando el sistema debe crear conjuntos de objetos que obligatoriamente deben ser compatibles entre sí. |
