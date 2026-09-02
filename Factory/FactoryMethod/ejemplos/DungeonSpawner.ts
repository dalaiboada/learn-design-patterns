// 1. Producto Común
interface Enemigo {
  atacar(): void;
}

// 2. Productos Concretos
class Orco implements Enemigo {
  public atacar(): void {
    console.log("👹 ¡Un Orco salvaje embiste con su hacha pesada!");
  }
}

class Esqueleto implements Enemigo {
  public atacar(): void {
    console.log("💀 ¡Un Esqueleto lanza una flecha oxidada desde las sombras!");
  }
}

class Dragon implements Enemigo {
  public atacar(): void {
    console.log("🐉 ¡Un Dragón ruge y escupe una llamarada devastadora!");
  }
}

// 3. La Fábrica Abstracta (Creador)
abstract class MazmorraSpawner {
  // El Factory Method que obliga a definir qué enemigo se genera
  public abstract crearEnemigo(): Enemigo;

  // Lógica de negocio compartida por cualquier mazmorra
  public iniciarEncuentro(): void {
    console.log("⚔️ ¡Alerta! Entrando en combate en la mazmorra...");
    const enemigo = this.crearEnemigo();
    enemigo.atacar();
  }
}

// 4. Fábricas Concretas para cada tipo de zona
class MazmorraOrcos extends MazmorraSpawner {
  public crearEnemigo(): Enemigo {
    return new Orco();
  }
}

class MazmorraCripta extends MazmorraSpawner {
  public crearEnemigo(): Enemigo {
    return new Esqueleto();
  }
}

class MazmorraVolcan extends MazmorraSpawner {
  public crearEnemigo(): Enemigo {
    return new Dragon();
  }
}

// --- PRUEBA DE USO ---

// El jugador entra a la zona de orcos
const spawnerOrcos: MazmorraSpawner = new MazmorraOrcos();
spawnerOrcos.iniciarEncuentro(); 

console.log("---");

// El jugador avanza a la cripta oscura
const spawnerCripta: MazmorraSpawner = new MazmorraCripta();
spawnerCripta.iniciarEncuentro(); 
