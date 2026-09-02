// 1. Producto común
interface Arma {
  readonly nombre: string,
  readonly danio: number,
  atacar(): void;
}

// 2. Productos concretos
class Espada implements Arma {
  public readonly nombre = 'Espada de Acero'; 
  public readonly danio = 10; 

  public atacar(): void { 
    console.log(`Jugador ataca con ${this.nombre} y hace ${this.danio} de daño`) 
  }
}

class Arco implements Arma {
  public readonly nombre = 'Arco y flecha'; 
  public readonly danio = 20; 

  public atacar(): void { 
    console.log(`Jugador ataca con ${this.nombre} y hace ${this.danio} de daño`) 
  }
}

class Baston implements Arma {
  public readonly nombre = 'Bastón mágico'; 
  public readonly danio = 5; 

  public atacar(): void { 
    console.log(`Jugador ataca con ${this.nombre} y hace ${this.danio} de daño`) 
  }
}

// 3. Fábrica Simple
type TipoArma = 'arco' | 'espada' | 'baston'

class ArmaFactory {
  public static crearArma(tipo: TipoArma): Arma {
    switch (tipo) {
      case 'arco':
        return new Arco();

      case 'espada':
        return new Espada();

      case 'baston':
        return new Baston();
      default:
        throw new Error(`Tipo de producto desconocido: ${tipo}`);
    }
  }
}

// Uso por el cliente
const arma = ArmaFactory.crearArma('arco');

arma.atacar()
