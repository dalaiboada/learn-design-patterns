# Factory Method (Creacional)

El **Factory Method** es un patrón de diseño **creacional** que proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases o métodos especializados alterar el tipo de objetos que se crearán.

![Factory Method](https://refactoring.guru/images/patterns/content/factory-method/factory-method-es.png?id=4040e2911292e5a623f10e36c380459d)

* **¿Qué problema resuelve?** Imagina que tu código necesita crear diferentes tipos de objetos (por ejemplo, enemigos de un juego como *Zombis*, *Orcos* o *Magos Oscuros*). 

  Si usas la palabra `new` directamente por todo el código cada vez que necesitas un enemigo, tu aplicación queda fuertemente acoplada a clases concretas. Si cambias el constructor de un enemigo, se rompe medio sistema.
* **La solución del Factory Method:** Creas un método dedicado exclusivamente a la creación (la "fábrica"). En lugar de instanciar clases directamente, el cliente le pide la creación al método de fábrica, lo que centraliza la lógica y permite añadir nuevos tipos de objetos en el futuro sin tocar el código existente.

---

## Estructura y Componentes

1. **El Producto (`Product`)**: Es la interfaz o clase abstracta común que define los objetos que la fábrica va a crear (ej. interfaz `Enemigo`).

2. **Los Productos Concretos (`ConcreteProductA`, `ConcreteProductB`)**: Las implementaciones reales de los objetos (ej. `Orco`, `Zombi`).

3. **La Creadora / Fábrica (`Creator` / `Factory`)**: La clase (o clase abstracta) que declara el método de fábrica (`crearEnemigo()`). A menudo contiene lógica de negocio que depende de los productos devueltos por la fábrica.

4. **Las Fábricas Concretas (`ConcreteCreator`)**: Subclases que sobrescriben el método de fábrica para devolver un producto específico. *(Nota: En implementaciones modernas en TypeScript, a veces se simplifica utilizando una simple función fábrica o una clase fábrica centralizada con un switch interno, pero la esencia conceptual es la misma).*

[![](https://img.plantuml.biz/plantuml/svg/ZP9BJiCm48Rtbdo7sT4ArJnNKOMQ8Y6nGt22YJC5Gs97OuS5RG_3DTZsOfZcrI3ns5cQVxv__l4iV40ETLb8uL-ChP2n15sWzsa8RB8wqArszi6y4PnA8SKHd2cuOvVNEZZGhjnzM2cC3SGhr3IKrb8078EhY54RPoVJ17n4saSfjWtfV23vYBAQARwasFltfVHlrBXX-H_l2mKtk_UCZKQON3DXxXYdKc0MXQX3imHeAmrntHMt4Rx2VJDthbyUtRknfsVITLnlghiPNft9-makXmcYJvCU-_IjSH_-TxiMUK_5FYz5JFyHyurI1yjCm9HLGINPW3-fbjzKKdHxc6zcis6s19w8AHyfbBeQZY21c0hX16gFlIGTQT9M9CM2R1ulyHC0)](https://editor.plantuml.com/uml/ZP9BJiCm48Rtbdo7sT4ArJnNKOMQ8Y6nGt22YJC5Gs97OuS5RG_3DTZsOfZcrI3ns5cQVxv__l4iV40ETLb8uL-ChP2n15sWzsa8RB8wqArszi6y4PnA8SKHd2cuOvVNEZZGhjnzM2cC3SGhr3IKrb8078EhY54RPoVJ17n4saSfjWtfV23vYBAQARwasFltfVHlrBXX-H_l2mKtk_UCZKQON3DXxXYdKc0MXQX3imHeAmrntHMt4Rx2VJDthbyUtRknfsVITLnlghiPNft9-makXmcYJvCU-_IjSH_-TxiMUK_5FYz5JFyHyurI1yjCm9HLGINPW3-fbjzKKdHxc6zcis6s19w8AHyfbBeQZY21c0hX16gFlIGTQT9M9CM2R1ulyHC0)

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
class ProductoC implements Producto {
  public operacion(): string { 
    return "Resultado del ProductoC"; 
  }
}

// 3. Fábrica (Creadora)
abstract class Creador {
  public abstract fabricarProducto(): Producto;

  public ejecutarAccion(): void {
    const producto = this.fabricarProducto();
    console.log(`Usando: ${producto.operacion()}`);
  }
}

// 4. Fábrica Concreta
class CreadorA extends Creador {
  public fabricarProducto(): Producto {
    return new ProductoA();
  }
}

class CreadorB extends Creador {
  public fabricarProducto(): Producto {
    return new ProductoB();
  }
}

class CreadorC extends Creador {
  public fabricarProducto(): Producto {
    return new ProductoC();
  }
}

// cliente
const creadorA = new CreadorA();
creadorA.ejecutarAccion();


const creadorB = new CreadorB();
creadorB.ejecutarAccion();

const creadorC = new CreadorC();
creadorC.ejecutarAccion();
```

---

## ¿Cuándo vale la pena la complejidad extra del *Factory Method* frente a la simplicidad del *Simple Factory*?

Aunque el *Simple Factory* es excelente para la gran mayoría de casos sencillos, el **Factory Method** se vuelve superior (y necesario) cuando tu aplicación crece y se enfrenta a ciertos problemas estructurales. Las razones principales por las cuales el *Factory Method* es mejor en escenarios complejos:

---

### 1. Cumplimiento del Principio Abierto/Cerrado (OCP - Open/Closed Principle)

* **Con Simple Factory:** Cada vez que agregas un nuevo producto (ej. un `ProductoC`), **estás obligado a modificar el código existente** de la fábrica (añadir un nuevo `case` en el `switch`). Tocar código que ya funciona es riesgoso y puede introducir errores (*bugs*).
* **Con Factory Method:** Si quieres agregar un `ProductoC`, **no tocas nada de lo anterior**. Simplemente creas tu `ProductoC` y una nueva clase `CreadorCofreC extends Creador`. Cumples la regla de oro: el código está *abierto a la extensión, pero cerrado a la modificación*.

### 2. Extensibilidad de la Lógica de Negocio (Plantillas de Comportamiento)

Observa que en el *Factory Method*, la clase abstracta `Creador` no solo tiene el método para fabricar, sino que tiene un método de negocio (como `ejecutarAccion()` o `abrirCofre()`) que define **cómo se usa** ese producto.

* Con el *Factory Method*, todas las subclases heredan ese flujo de trabajo estándar pero pueden decidir cambiar o especializar cómo se crea la pieza clave.
* En el *Simple Factory*, la fábrica solo suelta el objeto y te devuelves al código cliente a escribir toda la lógica de qué hacer con él, lo que puede duplicar código en distintas partes de tu aplicación.

### 3. Aislamiento de Dependencias (Principio de Responsabilidad Única)

* **Simple Factory** acumula todo el conocimiento del sistema en un solo lugar. Si tienes 50 tipos de ítems o enemigos diferentes, tu clase fábrica tendrá que importar las 50 clases y tener un `switch` gigantesco. Con el tiempo, esa clase se convierte en un *God Object* (un objeto que lo sabe y lo hace todo).
* **Factory Method** reparte la responsabilidad. Cada creador concreto solo conoce y se encarga de su propio producto. El módulo que maneja bosques solo conoce el creador de bosques; el módulo de minas, el de minas.

---

### Resumen: ¿Cuándo usar cuál?

* **Usa Simple Factory cuando:** Tienes un sistema pequeño o medianamente acotado, los tipos de objetos son estables (sabes que casi nunca vas a añadir nuevos) y solo quieres evitar repetir la palabra `new` y limpiar tus condicionales.
* **Usa Factory Method cuando:** Estás diseñando un framework, una librería, o un sistema grande donde **esperas que otros desarrolladores (o el futuro de tu proyecto) añadan nuevos tipos de productos** constantemente sin romper el código central ya escrito.

---
## Implementación
#### 1.  El Generador de Monstruos del Calabozo (Dungeon Spawner)

Imaginemos que en nuestro RPG, dependiendo de la mazmorra en la que entre el jugador, el sistema genera automáticamente el tipo correcto de monstruo usando una fábrica.

- *Enlace* [`DungeonSpawner.ts`](./ejemplos/DungeonSpawner.ts)

---

## 🛠️ Ejercicio Práctico: La Tienda de Pociones del Herrero
[`Enlace de Solución`](./ejemplos/PotionShop.ts)

### Enunciado:

Imagina que estás diseñando el sistema de inventario y consumibles de tu juego. Los jugadores pueden comprar diferentes tipos de pociones en la tienda (por ejemplo, **Poción de Vida**, **Poción de Maná** o **Poción de Velocidad**). 

No quieres instanciar los objetos directamente con `new` en la interfaz gráfica de la tienda, sino utilizar el **Patrón Factory Method** para desacoplar la creación.

Debes diseñar la arquitectura con los siguientes elementos:

1. Una interfaz **`Pocion`** que tenga un método: `consumir(nombreJugador: string): void`.
2. Dos o tres clases concretas que implementen `Pocion` (ej: `PocionVida`, `PocionMana`).
3. Una clase creadora abstracta o centralizada llamada **`Tienda`** que contenga un método fábrica `fabricarPocion(tipo: string): Pocion` o una estructura de fábrica basada en subclases, que se encargue de construir y devolver la poción correcta.



