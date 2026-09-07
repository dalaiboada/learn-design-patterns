# Observer (Comportamiento)
**También llamado**: *Observador, Publicación-Suscripción, Modelo-patrón, Event-Subscriber, Listener*

Es un patrón de diseño de **comportamiento** que te permite definir un mecanismo de suscripción para notificar a múltiples objetos sobre cualquier evento que le suceda al objeto que están observando.

![Patrón Observer](https://refactoring.guru/images/patterns/content/observer/observer.png)

* **¿Qué problema resuelve?**

Imagina que estás construyendo un sistema de notificaciones de logros en tu juego RPG. Cada vez que el jugador sube de nivel, necesitas actualizar la interfaz gráfica de usuario (UI), reproducir un sonido de victoria, guardar la partida automáticamente en la nube y desbloquear trofeos.

Si pones toda esta lógica directamente dentro de la clase `Jugador` mediante llamadas secuenciales, tu código quedará fuertemente acoplado. Cada vez que quieras agregar una nueva acción al subir de nivel, tendrías que modificar el código fuente del jugador.

* **La solución del Observer:**

Estableces una relación de uno a muchos. El objeto central (el **Sujeto** o *Subject*, como el `Jugador`) mantiene una lista de sus suscriptores (**Observadores**) interesados en su estado. Cuando algo cambia (ej. sube de nivel), el sujeto recorre su lista y notifica automáticamente a todos los observadores sin importar quiénes sean ni qué hagan exactamente.

## Estructura y Componentes

1. **El Sujeto (`Subject` / `Observable`)**: Mantiene una lista de observadores y provee métodos para suscribir (`attach`), desuscribir (`detach`) y notificar (`notify`) a los interesados sobre los cambios de estado.
2. **El Observador (`Observer` / `Subscriber`)**: Define una interfaz común para todos los suscriptores, especificando un método de actualización (`update`) que se invoca cuando el sujeto cambia.
3. **El Sujeto Concreto (`ConcreteSubject`)**: Almacena el estado de interés para los observadores y envía notificaciones a la interfaz común cuando ese estado cambia.
4. **El Observador Concreto (`ConcreteObserver`)**: Implementa la interfaz del observador para realizar una acción específica en respuesta a la notificación recibida del sujeto.

[![](https://img.plantuml.biz/plantuml/svg/dP8nJyCm48LtI_uFDmQXLCmPgYB4q8cX8sAusAzWIEp8lbGKn7ydATXKK0c4nzDxtxrtyYe9HndxJglqvFp0aNio7QTqAH9TEmhM9lYDUm5TQAMLyuAuPGEwQHFY3f5UjQBfdTCuM1PKc9WsDCH-VzRGBZYhrTliFN1fCxQFC99jDOLFK6eAy_OkCrc4pKELDL-IWlxGMVnDvuEuxRuw5UmgU1CXo07nBF3sHE2ZWXbx3xa-J6VoqJoL-IzNoSlBLLq_TEZX9VtZqZbogEjbiMlrlU5YiVonUBQlfjxJdtW7)](https://editor.plantuml.com/uml/dP8nJyCm48LtI_uFDmQXLCmPgYB4q8cX8sAusAzWIEp8lbGKn7ydATXKK0c4nzDxtxrtyYe9HndxJglqvFp0aNio7QTqAH9TEmhM9lYDUm5TQAMLyuAuPGEwQHFY3f5UjQBfdTCuM1PKc9WsDCH-VzRGBZYhrTliFN1fCxQFC99jDOLFK6eAy_OkCrc4pKELDL-IWlxGMVnDvuEuxRuw5UmgU1CXo07nBF3sHE2ZWXbx3xa-J6VoqJoL-IzNoSlBLLq_TEZX9VtZqZbogEjbiMlrlU5YiVonUBQlfjxJdtW7)

## Sintaxis y Estructura Base

```typescript
// 1. Interfaz del Observador
interface Observer {
    update(contexto: string): void;
}

// 2. Interfaz o clase base del Sujeto
class Subject {
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (!isExist) {
            this.observers.push(observer);
        }
    }

    public detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update("Evento de cambio detectado");
        }
    }
}

// 3. Sujeto Concreto
class ConcreteSubject extends Subject {
    public unNegocioImportante(): void {
        this.notify();
    }
}

// 4. Observador Concreto
class ConcreteObserver implements Observer {
    public update(contexto: string): void {
        console.log(`Observador notificado con mensaje: ${contexto}`);
    }
}

```

---

## Implementación

#### Sistema de Alertas de Vida Crítica en un RPG

Supongamos que en nuestro juego queremos que varios subsistemas reaccionen automáticamente cuando la salud de un personaje cae por debajo del 20% (estado crítico): la interfaz de usuario debe mostrar una alerta roja parpadeante, la música del combate debe cambiar a una pista de tensión, y la IA del compañero de equipo debe activar modo defensivo.

- *Enlace* [`HealthSystemObserver.ts`](./ejemplos/HealthSystemObserver.ts)

---

## 🛠️ Ejercicio Práctico: El Tablón de Misiones del Gremio
[`Enlace de Solución`](./ejemplos/GuildBoardObserver.ts)

### Enunciado:

Imagina que estás desarrollando el sistema del **Gremio de Aventureros** en tu juego RPG. Cuando se publica una nueva misión en el tablón general, todos los aventureros que están suscritos al gremio deben recibir una notificación instantánea con los detalles del contrato.

Debes aplicar el **Patrón Observer** para modelar este comportamiento:

1. Crea la interfaz **`Aventurero`** (el observador) que contenga un método `recibirAviso(tituloMision: string): void`.
2. Crea la clase **`TablonGremio`** (el sujeto) que permita registrar aventureros (`suscribir`), eliminarlos (`desuscribir`) y un método `publicarMision(titulo: string)` que al ejecutarse notifique de inmediato a todos los aventureros apuntados.
3. Crea al menos dos clases concretas de aventureros (por ejemplo, **`Guerrero`** y **`Mago`**) que implementen la interfaz y muestren un mensaje por consola al enterarse de la nueva misión.
4. Implementa un bloque de prueba donde crees el tablón, suscribas a un par de aventureros, publiques una misión y luego desuscribas a uno para comprobar que ya no recibe notificaciones.
