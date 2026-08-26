interface ComportamientoAtaque {
    atacar(atacante: string, objetivo: string): void;
}

class AtaqueEspada implements ComportamientoAtaque {
    public atacar(atacante: string, objetivo: string): void {
        console.log(`⚔️ ${atacante} arremete con su espada pesada contra ${objetivo.toUpperCase()} infligiendo daño físico.`);
    }
}

class AtaqueArco implements ComportamientoAtaque {
    public atacar(atacante: string, objetivo: string): void {
        console.log(`🏹 ${atacante} tensa su arco y dispara una flecha precisa a la distancia contra ${objetivo.toUpperCase()}.`);
    }
}

class AtaqueHechizo implements ComportamientoAtaque {
    public atacar(atacante: string, objetivo: string): void {
        console.log(`✨ ${atacante} canaliza energía arcana y lanza un rayo mágico directo a ${objetivo.toUpperCase()}.`);
    }
}

class Heroe {
    constructor(
        public nombre: string, 
        private estrategiaAtaque: ComportamientoAtaque) 
    {}

    public cambiarEstrategia(nuevaEstrategia: ComportamientoAtaque): void {
        this.estrategiaAtaque = nuevaEstrategia;
        console.log(`🔄 ${this.nombre} ha cambiado su estilo de combate.`);
    }

    public realizarAtaque(enemigo: string): void {
        this.estrategiaAtaque.atacar(this.nombre, enemigo);
    }
}

// --- PRUEBA DE USO ---

const heroe = new Heroe("Aragorn", new AtaqueEspada());
heroe.realizarAtaque("Orco"); // Ataca con espada

// En medio de la batalla, el héroe encuentra un arco y cambia su estrategia
heroe.cambiarEstrategia(new AtaqueArco());
heroe.realizarAtaque("Goblin"); // Ahora dispara con arco

// Más tarde aprende magia
heroe.cambiarEstrategia(new AtaqueHechizo());
heroe.realizarAtaque("Dragón"); // Ahora lanza magia
