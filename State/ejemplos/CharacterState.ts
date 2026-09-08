// 1. Interfaz de Estado
interface EstadoCombate {
    atacar(): void;
    recibirDanio(cantidad: number): void;
}

// 2. Contexto (El Personaje)
class PersonajeCombate {
    private estadoActual: EstadoCombate;

    constructor(estadoInicial: EstadoCombate) {
        this.estadoActual = estadoInicial;
    }

    public cambiarEstado(nuevoEstado: EstadoCombate): void {
        this.estadoActual = nuevoEstado;
        console.log(`[Combate] El personaje cambió de postura de combate.`);
    }

    public realizarAccionAtaque(): void {
        this.estadoActual.atacar();
    }

    public sufrirImpacto(danio: number): void {
        this.estadoActual.recibirDanio(danio);
    }
}

// 3. Estados Concretos
class EstadoNormal implements EstadoCombate {
    public atacar(): void {
        console.log("El personaje realiza un ataque básico equilibrado.");
    }

    public recibirDanio(danio: number): void {
        console.log(`Daño recibido de ${danio}. Salud afectada normalmente.`);
    }
}

class EstadoFuria implements EstadoCombate {
    public atacar(): void {
        console.log("¡ATAQUE CRÍTICO DE FURIA! El golpe inflige doble daño devastador.");
    }

    public recibirDanio(danio: number): void {
        console.log(`En estado de furia, ignoras parte del dolor. Daño reducido: ${danio / 2}`);
    }
}

class EstadoEscudo implements EstadoCombate {
    public atacar(): void {
        console.log("Estás a la defensiva: el ataque es débil pero seguro.");
    }

    public recibirDanio(danio: number): void {
        console.log(`¡Escudo mágico activo! El daño de ${danio} es completamente absorbido.`);
    }
}

// --- Prueba de la implementación ---
const heroe = new PersonajeCombate(new EstadoNormal());

heroe.realizarAccionAtaque();
heroe.sufrirImpacto(30);

console.log("\n--- El héroe entra en modo Furia por baja salud ---");
heroe.cambiarEstado(new EstadoFuria());
heroe.realizarAccionAtaque();
heroe.sufrirImpacto(40);
