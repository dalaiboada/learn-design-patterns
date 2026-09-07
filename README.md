# Design Patterns in TypeScript

Repositorio para documentar, estudiar e implementar los diferentes patrones de diseño de software utilizando **TypeScript**.

## Índice de Contenidos

*   [Singleton](#singleton)
*   [Strategy](#strategy)
*   [Factory (Familia de Patrones)](#factory-familia-de-patrones)
    *   [Simple Factory](#3-simple-factory)
    *   [Factory Method](#4-factory-method)
    *   [Abstract Factory](#5-abstract-factory)
*   [Adapter](#adapter)
*   *(Próximamente más patrones...)*

---

## 📂 Patrones Implementados

### 1. Singleton
El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.

[Ver más...](/Singleton)

---

### 2. Strategy
El patrón Strategy permite definir una familia de algoritmos, encapsular cada uno de ellos y hacer que sean intercambiables.

[Ver más...](/Strategy)

---

### 3. Factory (Familia de Patrones)
El objetivo de estos patrones es desacoplar el código cliente de las clases concretas que necesita instanciar, promoviendo un diseño más limpio, mantenible y escalable.

#### Estructura de la carpeta
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

- **Simple Factory**: Una única clase centralizada o método estático encapsula la lógica de decisión mediante condicionales (`switch`/`if`)

- **Factory Method**: Define una interfaz para crear un objeto, delegando en las subclases la decisión de qué clase concreta instanciar.

- **Abstract Factory**: Crea familias de objetos relacionados o dependientes sin especificar sus clases concretas.

[Ver más...](/Factory)

### 4. Adapter
Permite colaborar a objetos con interfaces incompatibles, sirviendo de puente o traductor entre ellos sin modificar su código original.

[Ver más...](/Adapter)
