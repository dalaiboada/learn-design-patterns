# Singleton
**También llamado**: *Instancia única*

![Patrón Singleton](https://refactoring.guru/images/patterns/content/singleton/singleton.png)

## Propósito
Singleton o  es un patrón de diseño **creacional** que nos permite asegurarnos de que **una clase tenga una única instancia**, a la vez que proporciona un **punto de acceso global a dicha instancia**.

¿Por qué querría alguien controlar cuántas instancias tiene una clase? El motivo más habitual es **controlar el acceso a algún recurso compartido**, por ejemplo, una base de datos o un archivo.

Funciona así: imagina que has creado un objeto y al cabo de un tiempo decides crear otro nuevo. En lugar de recibir un objeto nuevo, obtendrás el que ya habías creado.

## Estructura y Componentes
[![](https://img.plantuml.biz/plantuml/svg/VL6xRiCm3DmD-1yusWfgzB5bIj2Xo12WGBv0bbMNY4C659sXGJwcO-PkNVrZbHe4JXgWcYZgxdX7pO9QqNxJvLbO8ssjs0supeOmLnMiU_KBnxJ23m_tbvZQkdKht5FZk6C15KiXFddIFCkpNmbO8RMTLoROvnd4SmVxE53H7G0fLkJGJaVO6HGd1fNUAKjHdfgJaScrUlAoE0iKvOt41CYtx92NiTTmGkmOcpmx97F4wa6mVLVWjskgCQzMPVYY2-_5YwVXAEYud1gJK0yLF8yMOIkuimr3OSmVxyQKLI8yLZ0_hPF11nq-On2-vjqkvan-gc0v75EEI-xmNNUfYEH_TtDIyTH0YftYp-8b_lWF)](https://editor.plantuml.com/uml/VL6xRiCm3DmD-1yusWfgzB5bIj2Xo12WGBv0bbMNY4C659sXGJwcO-PkNVrZbHe4JXgWcYZgxdX7pO9QqNxJvLbO8ssjs0supeOmLnMiU_KBnxJ23m_tbvZQkdKht5FZk6C15KiXFddIFCkpNmbO8RMTLoROvnd4SmVxE53H7G0fLkJGJaVO6HGd1fNUAKjHdfgJaScrUlAoE0iKvOt41CYtx92NiTTmGkmOcpmx97F4wa6mVLVWjskgCQzMPVYY2-_5YwVXAEYud1gJK0yLF8yMOIkuimr3OSmVxyQKLI8yLZ0_hPF11nq-On2-vjqkvan-gc0v75EEI-xmNNUfYEH_TtDIyTH0YftYp-8b_lWF)

Para lograr un Singleton, la arquitectura se compone de tres elementos obligatorios:

1. **Constructor Privado (`private constructor`)**: Bloquea la creación libre de objetos mediante la palabra new desde el exterior.

2. **Atributo Estático Privado (`private static instancia`)**: Almacena en memoria la única referencia al objeto de la clase.

3. **Método Estático Público (`public static obtenerInstancia()`)**: Controla la creación. Si el objeto no existe, lo crea; si ya existe, devuelve la instancia existente.

## Sintaxis y Estructura Base
```ts
class Singleton {
    // Atributo estático privado
    private static instancia: Singleton;

    // Constructor privado
    private constructor() {
        // Inicialización del objeto único
    }

    // Método de acceso global
    public static obtenerInstancia(): Singleton {
        if (!Singleton.instancia) {
            Singleton.instancia = new Singleton();
        }
        return Singleton.instancia;
    }

    // Métodos de lógica de negocio
}
```

---
## Implementación
#### 1. Manejador de Sesión de Juego

Imaginemos que estamos construyendo nuestro juego RPG y necesitamos un Gestor de Partida único que controle cuántos jugadores hay conectados en el servidor y el estado global del mundo.

- *Enlace* [`GameSessionManager.ts`](./ejemplos/GameSessionManager.ts)

### 2. Conexión a Base de datos (Ejemplo)
Imaginemos un Gestor de Configuración o una Conexión a Base de Datos.

- *Enlace* [`DatabaseConnection.ts`](./ejemplos/DatabaseConnection.ts)

---
## Ejercicio: El Sistema de Logros Globales (Achievements)
[`Enlace de Solución`](./ejemplos/Achievements.ts)


Imagina que estás desarrollando el sistema de logros y estadísticas globales para tu juego RPG. 

Como los logros se desbloquean desde cualquier parte del mapa. 
*(al derrotar enemigos, abrir cofres o terminar misiones)*

Necesitas asegurarte de que exista una única instancia mundial de la clase que gestiona los logros para que no se pierda la cuenta de los puntos obtenidos por el jugador.

Debes diseñar una clase llamada **GestorLogros** aplicando el Patrón Singleton.

#### Requisitos de la arquitectura:
- **1. Atributo estático privado**: Que almacene la única instancia de GestorLogros.

- **2. Constructor privado**: Que inicialice una lista interna o un contador de logros desbloqueados 
(por ejemplo, un array de strings logrosDesbloqueados: string[] o un número puntosTotales).

- **3. Método estático público** (`obtenerInstancia`): Que controle la creación única del gestor.

- **4. Métodos públicos** de instancia:
    - `desbloquearLogro(nombreLogro: string): void` 
    (debe agregar el logro a la lista y mostrar un mensaje en consola).

    - `mostrarLogros(): void `
    (debe imprimir en consola todos los logros que el jugador ha conseguido hasta el momento).
