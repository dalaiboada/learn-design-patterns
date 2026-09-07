# Adapter (Estructural)

**Adapter** es un patrón de diseño **estructural** que permite colaborar a objetos con interfaces incompatibles, sirviendo de puente o traductor entre ellos sin modificar su código original.


![Patrón adapter](https://refactoring.guru/images/patterns/content/adapter/adapter-es.png)

* **¿Qué problema resuelve?**

Imagina que estás desarrollando un videojuego RPG y tu motor de inventario moderno espera recibir objetos que cumplan con una interfaz estandarizada (`ItemInventario`). Sin embargo, decides integrar una librería externa o un sistema heredado antiguo de armas (`LegacyWeapon`) que maneja métodos y propiedades totalmente distintos (`obtenerNombreArma()`, `obtenerDanioTotal()`).

Si intentas usarlos directamente, tu código fallará por incompatibilidad de tipos y contratos.

* **La solución del Adapter:**

Creas una clase **Adaptadora** (`WeaponAdapter`) que implementa la interfaz que tu sistema espera (`ItemInventario`). Esta clase interna envuelve una instancia del sistema antiguo (`LegacyWeapon`) y traduce las llamadas: cuando tu juego pide el nombre estándar, el adaptador llama internamente al método viejo y se lo entrega en el formato correcto.

## Estructura y Componentes

1. **El Cliente (`Client`)**: Es la clase o módulo de tu aplicación (ej. el sistema de inventario del juego) que contiene la lógica de negocio y espera trabajar con objetos que cumplan una interfaz específica.
2. **La Interfaz Objetivo (`Target`)**: Define el dominio o contrato específico que el Cliente utiliza para operar (ej. `ItemInventario`).
3. **El Adaptado (`Adaptee`)**: Es una clase existente, normalmente de un sistema heredado o librería externa, que tiene una funcionalidad útil pero cuya interfaz es incompatible con el cliente (ej. `LegacyWeapon`).
4. **El Adaptador (`Adapter`)**: Es la clase puente que implementa la interfaz `Target` y envuelve una instancia del `Adaptee`. Traduce las peticiones del cliente hacia los métodos del adaptado.

[![](https://img.plantuml.biz/plantuml/svg/XP2x3i8m34NtIFa7ZwrG9UOEg1KJA_038NMhYBn8t0N4lvE-K640ZvRFkRQhI29GRpHdyQgi5q4Oa5h4M1C5TUa93zBPaxeZR3dZJ5d2q0g9S1QXGu87Pv1g0m5lFKRAyX9YGct7sNCWHXlijKAxcexEuDJRkmOp6cNbBCq_qBeHdX1Nh4UfMYMFFnCdB80oNgD9GV5hvGB4P2wNY7-dp4SKnMvMSRQakA7vrd1MeMtIMry0)](https://editor.plantuml.com/uml/XP2x3i8m34NtIFa7ZwrG9UOEg1KJA_038NMhYBn8t0N4lvE-K640ZvRFkRQhI29GRpHdyQgi5q4Oa5h4M1C5TUa93zBPaxeZR3dZJ5d2q0g9S1QXGu87Pv1g0m5lFKRAyX9YGct7sNCWHXlijKAxcexEuDJRkmOp6cNbBCq_qBeHdX1Nh4UfMYMFFnCdB80oNgD9GV5hvGB4P2wNY7-dp4SKnMvMSRQakA7vrd1MeMtIMry0)

## Sintaxis y Estructura Base

```typescript
// 1. Interfaz Objetivo (Target) que el cliente espera
interface Target {
  request(): string;
}

// 2. El Adaptado (Adaptee) con una interfaz incompatible
class Adaptee {
  public specificRequest(): string {
    return "Especial comportamiento del Adaptado";
  }
}

// 3. El Adaptador (Adapter) que conecta ambos mundos
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest();
    return `(Adaptado) ${result}`;
  }
}

// 4. Uso del cliente
const adaptee = new Adaptee();
const adapter: Target = new Adapter(adaptee);
console.log(adapter.request());

```

---

## Implementación

#### Adaptando un Sistema de Audio Antiguo en el Motor del Juego

Supongamos que nuestro juego RPG moderno utiliza una interfaz unificada `MotorDeAudio` para reproducir efectos de sonido mediante objetos de tipo `AudioFX`. Sin embargo, queremos incorporar una librería externa de audio retro llamada `LegacySoundEngine` que reproduce efectos usando funciones totalmente distintas como `playOldFormat(soundId: number)`.

- *Enlace* [`AudioAdapter.ts`](./ejemplos/AudioAdapter.ts)

---

## 🛠️ Ejercicio Práctico: El Adaptador de Misiones Externas

[`Enlace de Solución`](./ejemplos/QuestAdapter.ts)

### Enunciado:

Imagina que estás desarrollando el gestor de misiones de tu juego RPG. Tu sistema principal gestiona todas las misiones activas utilizando una interfaz estándar llamada **`MisionJuego`**, la cual cuenta con el método `obtenerDescripcion(): string` y `estaCompletada(): boolean`.

Sin embargo, el estudio adquirió un paquete de misiones de expansión creado por otro studio externo cuyo sistema de misiones utiliza una clase completamente diferente llamada **`ExternalQuestData`**, cuyos métodos son `getQuestTitle()` y `isFinished()`.

Debes aplicar el **Patrón Adapter** para integrar las misiones externas sin modificar su código original:

1. Crea la interfaz **`MisionJuego`** con los métodos `obtenerDescripcion(): string` y `estaCompletada(): boolean`.
2. Crea la clase externa **`ExternalQuestData`** que posea los métodos antiguos `getQuestTitle(): string` e `isFinished(): boolean`.
3. Crea la clase adaptadora **`ExternalQuestAdapter`** que implemente **`MisionJuego`** y reciba una instancia de `ExternalQuestData` en su constructor para traducir las llamadas de los métodos.
4. Implementa un bloque de prueba donde registres una misión externa adaptada dentro de una función de tu juego que reciba un objeto tipo `MisionJuego`.
