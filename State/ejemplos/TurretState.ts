// 1. Estado
interface EstadoTorreta {
    detectarEnemigo(): void;
    disparar(): void;
}

// 2. Contexto
class TorretaDefensiva {
    constructor(
        private estadoActual: EstadoTorreta
    ){}

    public cambiarEstado(estado: EstadoTorreta) {
        this.estadoActual = estado;
        console.log(`[TORRETA] Sistema actualizado al estado: ${(estado).constructor.name}`)
    }

    public detectarEnemigo() {
        this.estadoActual.detectarEnemigo();
    }

    public disparar() {
        this.estadoActual.disparar();
    }
}

// 3. Estados concretos
class TorretaAtacando implements EstadoTorreta {
    public detectarEnemigo(){
        console.log('[ATACANDO] La torreta abre fuego normal contra los objetivos detectados')
    }

    public disparar(){
        console.log('[ATACANDO] Disparo láser estándar a objetivos cercanos.')
    }
}

class TorretaSobrecargada implements EstadoTorreta {
    public detectarEnemigo(){
        console.log('[SOBRECARGADA] La torreta dispara ráfagas triples de alta potencia pero corre el riesgo de apagarse')
    }

    public disparar(){
        console.log('[SOBRECARGADA] ¡RÁFAGA TRIPLE DE PLASMA! Daño masivo destructivo desplegado.')
    }
}

class TorretaInactiva implements EstadoTorreta {
    public detectarEnemigo(){
        console.log('[INACTIVA] La torreta está en modo ahorro de energía, escaneando despacio')
    }

    public disparar(){
        console.log('[INACTIVA] La torreta está apagada y no puede disparar.')
    }
}

// --- Cliente ---
const miTorreta = new TorretaDefensiva(new TorretaInactiva());

miTorreta.disparar();
miTorreta.detectarEnemigo(); 

miTorreta.cambiarEstado(new TorretaSobrecargada())
miTorreta.disparar()
