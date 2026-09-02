# 🏭 Familia Factory

El objetivo de estos patrones es desacoplar el código cliente de las clases concretas que necesita instanciar, promoviendo un diseño más limpio, mantenible y escalable.

---

## Estructura del Repositorio

El repositorio lo divide en tres enfoques principales de diseño factory, ordenados por su complejidad y nivel de abstracción:

```text
Factory/
├── AbstractFactory/
│   ├── ejemplos/
│   └── README.md
├── FactoryMethod/
│   ├── ejemplos/
│   └── README.md
└── SimpleFactory/
    ├── ejemplos/
    └── README.md
```
---

## 🔍 Resumen de Patrones

### 1. [Simple Factory](./SimpleFactory/README.md)

* **¿Qué es?** Es un patrón idiomático (variante popular) donde una única clase centralizada (o método estático) encapsula la lógica de decisión mediante un condicional (`switch`/`if`) para decidir qué objeto instanciar.
* **Cuándo usarlo:** En sistemas pequeños o medianos donde los tipos de objetos son estables y solo deseas evitar repetir la palabra reservada `new` y limpiar las condicionales en el código cliente.
* 🔗 *Explora los ejemplos y la documentación en la carpeta [SimpleFactory](./SimpleFactory/README.md).*

### 2. [Factory Method](./FactoryMethod/README.md)

* **¿Qué es?** Un patrón oficial de la *Gang of Four* (GoF) que define una interfaz o clase abstracta para crear un objeto, pero delega en las **subclases** la decisión de qué clase concreta instanciar.
* **Cuándo usarlo:** Cuando quieres cumplir con el principio de Abierto/Cerrado (OCP), permitiendo que el sistema se extienda con nuevos tipos de productos mediante nuevas subclases creadoras sin tocar el código existente.
* 🔗 *Explora los ejemplos y la documentación en la carpeta [FactoryMethod](./FactoryMethod/README.md).*

### 3. [Abstract Factory](./AbstractFactory/README.md)

* **¿Qué es?** El nivel más alto de abstracción creacional. Permite crear **familias de objetos relacionados o dependientes** (por ejemplo, conjuntos de equipamiento medieval o futurista) sin especificar sus clases concretas.
* **Cuándo usarlo:** Cuando el sistema necesita garantizar que los objetos creados trabajen juntos en armonía y que nunca se mezclen elementos de familias incompatibles.
* 🔗 *Explora los ejemplos y la documentación en la carpeta [AbstractFactory](./AbstractFactory/README.md).*

---

## 🚀 ¿Por dónde empezar?

Si estás repasando los conceptos desde cero, te recomiendo seguir este orden de lectura:

1. **Simple Factory** (para entender cómo aislar el `new`).
2. **Factory Method** (para entender la inversión de control mediante herencia).
3. **Abstract Factory** (para escalar hacia la creación de familias completas de objetos).
