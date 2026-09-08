# State (Comportamiento)

Es un patrón de diseño de **comportamiento** que permite a un objeto alterar su comportamiento cuando su estado interno cambia, parece como si el objeto cambiara de clase.

![Simple Factory](https://refactoring.guru/images/patterns/content/state/state-es.png)

* **¿Qué problema resuelve?**

Imagina que estás programando el comportamiento de un personaje en tu juego RPG, el cual puede estar en diferentes estados: **Normal**, **Envenenado**, **Berserk** o **Inconsciente**. Dependiendo del estado, las acciones como `atacar()` o `recibirDanio()` se comportan de forma radicalmente distinta.

Si intentas resolver esto dentro de la clase del personaje usando múltiples condiciones `switch` o `if/else` en cada método, tu código se vuelve rígido, propenso a errores y muy difícil de mantener cada vez que agregas un nuevo estado.

* **La solución del State:**

Creas nuevas clases para representar cada uno de los estados posibles del objeto y extraes todos los comportamientos específicos de los estados dentro de esas clases. El objeto original (el contexto) almacena una referencia a uno de los objetos de estado que representa su estado actual, y le delega el trabajo relacionado con el estado en lugar de implementar todo por sí mismo.

## Estructura y Componentes

1. **El Contexto (`Context`)**: Almacena una referencia a una instancia de un estado concreto, la cual delega los trabajos dependientes del estado actual.
2. **La Interfaz de Estado (`State`)**: Define la interfaz común que encapsula los comportamientos asociados a un estado particular del Contexto.
3. **Los Estados Concretos (`ConcreteStateA`, `ConcreteStateB`)**: Implementan la interfaz de Estado, proporcionando su propia versión de los comportamientos para un estado específico del Contexto. También pueden manejar transiciones hacia otros estados.

[![](https://img.plantuml.biz/plantuml/svg/bP512i8m44NtWTnXbegqkEwYM5svzWJJTDHWazHaAg9uTzEMgXGKp39v_sL-iWgCdbjJIn5EsZReqO2gCOI2sUkoPTegPtVwHh2KGWfjcVmU5S6EaGdkKa1S2pYYhMgQpJEuE5r9yUZetWGR5qDN7ja4GXVD1iEOLr5me7vhzdd-4WwOftDBWR_Teppn82b0cwOcGvR3VxE-7Uj_7MDJboJvM6yoLPhchmV9GA4fDK9iX9MRiElVh1GhibNykYS0)](https://editor.plantuml.com/uml/bP512i8m44NtWTnXbegqkEwYM5svzWJJTDHWazHaAg9uTzEMgXGKp39v_sL-iWgCdbjJIn5EsZReqO2gCOI2sUkoPTegPtVwHh2KGWfjcVmU5S6EaGdkKa1S2pYYhMgQpJEuE5r9yUZetWGR5qDN7ja4GXVD1iEOLr5me7vhzdd-4WwOftDBWR_Teppn82b0cwOcGvR3VxE-7Uj_7MDJboJvM6yoLPhchmV9GA4fDK9iX9MRiElVh1GhibNykYS0)

## Sintaxis y Estructura Base

```typescript
// 1. Interfaz de Estado
interface State {
    handle(context: Context): void;
}

// 2. Contexto
class Context {
    private state: State;

    constructor(initialState: State) {
        this.transitionTo(initialState);
    }

    public transitionTo(state: State): void {
        console.log(`Contexto: Transición al estado ${(<any>state).constructor.name}.`);
        this.state = state;
    }

    public request(): void {
        this.state.handle(this);
    }
}

// 3. Estados Concretos
class ConcreteStateA implements State {
    public handle(context: Context): void {
        console.log("EstadoA maneja la petición y cambia el estado a B.");
        context.transitionTo(new ConcreteStateB());
    }
}

class ConcreteStateB implements State {
    public handle(context: Context): void {
        console.log("EstadoB maneja la petición y puede cambiar el estado de vuelta a A.");
        context.transitionTo(new ConcreteStateA());
    }
}

```

---

## Implementación

#### Estados de Movimiento de un Personaje en Combate

Supongamos que nuestro personaje de juego puede encontrarse en diferentes estados dinámicos: **Estado Normal**, **Estado Escudo Protector** o **Estado Furia**, alterando la forma en que reacciona al recibir ataques o al intentar atacar.

* *Enlace* [`CharacterState.ts`](./ejemplos/CharacterState.ts)

---

## 🛠️ Ejercicio Práctico: El Ciclo de Vida de una Torreta Defensiva

[`Enlace de Solución`](./ejemplos/TurretState.ts)

### Enunciado:

Imagina que estás programando una estructura defensiva en tu juego de estrategia: una **Torreta**. La torreta cuenta con un comportamiento operativo que cambia drásticamente según su estado actual (**Inactiva**, **Atacando**, o **Sobrecargada**).

Debes aplicar el **Patrón State** para gestionar su lógica:

1. Crea la interfaz **`EstadoTorreta`** que declare los métodos `detectarEnemigo(): void` y `disparar(): void`.
2. Crea una clase contexto llamada **`TorretaDefensiva`** que mantenga una referencia al estado actual y métodos para cambiar de estado o ejecutar las acciones.
3. Crea tres estados concretos que implementen la interfaz:
* **`TorretaInactiva`** (ej: la torreta está en modo ahorro de energía, escaneando despacio).
* **`TorretaAtacando`** (ej: la torreta abre fuego normal contra los objetivos detectados).
* **`TorretaSobrecargada`** (ej: la torreta dispara ráfagas triples de alta potencia pero corre el riesgo de apagarse).


4. Implementa un bloque de prueba donde la torreta comience inactiva, cambie al modo de ataque, pase a sobrecarga y responda de forma distinta a las mismas acciones en cada momento.
