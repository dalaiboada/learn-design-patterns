// Interfaz Observer
interface ObservadorPersonaje {
    actualizar(saludActual: number): void;
}

// Clase Sujeto (El Jugador)
class JugadorSalud {
    private observadores: ObservadorPersonaje[] = [];
    private vida: number = 100;

    public suscribir(obs: ObservadorPersonaje): void {
        this.observadores.push(obs);
    }

    public desuscribir(obs: ObservadorPersonaje): void {
        this.observadores = this.observadores.filter(o => o !== obs);
    }

    public recibirDanio(cantidad: number): void {
        this.vida = Math.max(0, this.vida - cantidad);

        console.log(`[Jugador] Salud actual: ${this.vida}/100`);

        // Si la salud es menor o igual a 20, notificamos a todos los sistemas
        if (this.vida <= 20) {
            this.notificarObservadores();
        }
    }

    private notificarObservadores(): void {
        for (const obs of this.observadores) {
            obs.actualizar(this.vida);
        }
    }
}

// Observadores Concretos
class InterfazUIAlerta implements ObservadorPersonaje {
    public actualizar(saludActual: number): void {
        console.log(`[UI] ¡Alerta visual! Pantalla parpadeando en rojo. Salud crítica: ${saludActual}`);
    }
}

class SistemaMusicaTensa implements ObservadorPersonaje {
    public actualizar(saludActual: number): void {
        console.log(`[Audio] Cambiando música de fondo a modo de supervivencia (Salud: ${saludActual}).`);
    }
}

class IACompaneroDefensivo implements ObservadorPersonaje {
    public actualizar(saludActual: number): void {
        console.log(`[IA] Compañero cambia a formación de cobertura para proteger al jugador (Salud: ${saludActual}).`);
    }
}

// --- Prueba de la implementación ---
const heroe = new JugadorSalud();

heroe.suscribir(new InterfazUIAlerta());
heroe.suscribir(new SistemaMusicaTensa());
heroe.suscribir(new IACompaneroDefensivo());

heroe.recibirDanio(40); 
console.log("---");
heroe.recibirDanio(45); 
