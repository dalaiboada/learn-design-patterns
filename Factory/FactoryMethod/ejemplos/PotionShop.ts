// 1. Producto común
interface Pocion {
  readonly nombre: string;
  readonly mejora: number;
  
  consumir(nombreJugador: string): void;
}

// 2. Productos concretos
class PocionVida implements Pocion {
  public readonly nombre = 'Poción de Vida'
  public readonly mejora = 20

  public consumir(nombreJugador: string): void { 
    console.log(`[${nombreJugador}] incrementa su vida un ${this.mejora}% con ${this.nombre}`); 
  }
}

class PocionMana implements Pocion {
  public readonly nombre = 'Poción de Maná'
  public readonly mejora = 25

  public consumir(nombreJugador: string): void { 
    console.log(`[${nombreJugador}] incrementa su maná un ${this.mejora}% con ${this.nombre}`); 
  }
}

class PocionVelocidad implements Pocion {
  public readonly nombre = 'Poción de Velocidad'
  public readonly mejora = 10

  public consumir(nombreJugador: string): void { 
    console.log(`[${nombreJugador}] incrementa su velocidad un ${this.mejora}% con ${this.nombre}`); 
  }
}

// 3. Fábrica (Creadora)
abstract class Tienda {
  public abstract fabricarPocion(): Pocion;

  public adquirirPocion(nombreJugador: string): void {
    const pocion = this.fabricarPocion();

    pocion.consumir(nombreJugador);
  }
}

// 4. Fábrica Concreta
class VidaFactory extends Tienda {
  public fabricarPocion(): Pocion {
    return new PocionVida();
  }
}

class ManaFactory extends Tienda {
  public fabricarPocion(): Pocion {
    return new PocionMana();
  }
}

class VelocidadFactory extends Tienda {
  public fabricarPocion(): Pocion {
    return new PocionVelocidad();
  }
}

// cliente
const fabricaVida = new VidaFactory();
fabricaVida.adquirirPocion('Victoria');

const fabricaMana = new ManaFactory();
fabricaMana.adquirirPocion('Lilith');// 1. Producto común
interface Pocion {
  readonly nombre: string;
  readonly mejora: number;
  
  consumir(nombreJugador: string): void;
}

// 2. Productos concretos
class PocionVida implements Pocion {
  public readonly nombre = 'Poción de Vida'
  public readonly mejora = 20

  public consumir(nombreJugador: string): void { 
    console.log(`[${nombreJugador}] incrementa su vida un ${this.mejora}% con ${this.nombre}`); 
  }
}

class PocionMana implements Pocion {
  public readonly nombre = 'Poción de Maná'
  public readonly mejora = 25

  public consumir(nombreJugador: string): void { 
    console.log(`[${nombreJugador}] incrementa su maná un ${this.mejora}% con ${this.nombre}`); 
  }
}

class PocionVelocidad implements Pocion {
  public readonly nombre = 'Poción de Velocidad'
  public readonly mejora = 10

  public consumir(nombreJugador: string): void { 
    console.log(`[${nombreJugador}] incrementa su velocidad un ${this.mejora}% con ${this.nombre}`); 
  }
}

// 3. Fábrica (Creadora)
abstract class Tienda {
  public abstract fabricarPocion(): Pocion;

  public adquirirPocion(nombreJugador: string): void {
    const pocion = this.fabricarPocion();

    pocion.consumir(nombreJugador);
  }
}

// 4. Fábrica Concreta
class VidaFactory extends Tienda {
  public fabricarPocion(): Pocion {
    return new PocionVida();
  }
}

class ManaFactory extends Tienda {
  public fabricarPocion(): Pocion {
    return new PocionMana();
  }
}

class VelocidadFactory extends Tienda {
  public fabricarPocion(): Pocion {
    return new PocionVelocidad();
  }
}

// cliente
const fabricaVida = new VidaFactory();
fabricaVida.adquirirPocion('Victoria');

const fabricaMana = new ManaFactory();
fabricaMana.adquirirPocion('Lilith');
