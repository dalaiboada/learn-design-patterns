// --- 1. Productos Abstractos ---
interface Arma {
  atacar(): void;
}

interface Escudo {
  defender(): void;
}

// --- 2. Productos Concretos (Familia Medieval) ---
class EspadaMedieval implements Arma {
  public atacar(): void {
    console.log("⚔️ Atacando con una Espada de Hierro forjado (Medieval).");
  }
}

class EscudoMedieval implements Escudo {
  public defender(): void {
    console.log("🛡️ Bloqueando golpes con un Escudo pesado de Madera (Medieval).");
  }
}

// --- 2. Productos Concretos (Familia Sci-Fi) ---
class PistolaLaser implements Arma {
  public atacar(): void {
    console.log("🔫 Disparando un haz de Plasma láser (Sci-Fi).");
  }
}

class EscudoDeEnergia implements Escudo {
  public defender(): void {
    console.log("⚡ Activando una barrera de campo de Energía (Sci-Fi).");
  }
}

// --- 3. Fábrica Abstracta ---
interface FabricaEquipamiento {
  crearArma(): Arma;
  crearEscudo(): Escudo;
}

// --- 4. Fábricas Concretas ---
class FabricaMedieval implements FabricaEquipamiento {
  public crearArma(): Arma {
    return new EspadaMedieval();
  }
  public crearEscudo(): Escudo {
    return new EscudoMedieval();
  }
}

class FabricaSciFi implements FabricaEquipamiento {
  public crearArma(): Arma {
    return new PistolaLaser();
  }
  public crearEscudo(): Escudo {
    return new EscudoDeEnergia();
  }
}

// --- 5. Código Cliente ---
function equiparJugador(fabrica: FabricaEquipamiento, nombreJugador: string): void {
  console.log(`--- Configurando equipamiento para el héroe: ${nombreJugador} ---`);
  
  const arma = fabrica.crearArma();
  const escudo = fabrica.crearEscudo();

  arma.atacar();
  escudo.defender();
  console.log("----------------------------------------------------------\n");
}

// Pruebas de uso
equiparJugador(new FabricaMedieval(), "Arthur el Paladín");
equiparJugador(new FabricaSciFi(), "Nova el Cazaestrellas");
