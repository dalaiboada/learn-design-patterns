// Interfaz Observer
interface Aventurero {
    readonly nombre: string;
    recibirAviso(tituloMision: string): void;
}

// Clase Sujeto (el que maneja las suscripcions)
class TablonGremio {
    private aventureros: Aventurero[] = [];

    public registrarAventurero(aventurero: Aventurero) {
        const existe = this.aventureros.includes(aventurero);
        if (!existe) {
            this.aventureros.push(aventurero);
            console.log("[Gremio] Un nuevo aventurero se ha inscrito al tablón.");
        }
    }

    public eliminarAventurero(aventurero: Aventurero) {
        this.aventureros = this.aventureros.filter(a => a !== aventurero);
        console.log("[Gremio] Un aventurero se ha retirado del tablón.");
    }

    public publicarMision(tituloMision: string) {
        console.log(`[Gremio] Una nueva misión ha sido registrada: ${tituloMision}`)

        this.notificar(tituloMision);
    }

    private notificar(tituloMision: string){
        for (const aventurero of this.aventureros){
            aventurero.recibirAviso(tituloMision);
        }
    }
}

// Observadores Concretos
class Guerrero implements Aventurero {
    constructor(
        public readonly nombre: string
    ){};
    
    public recibirAviso(titulo: string){
        console.log(`[GUERRERO] ${this.nombre} ha sido convocado \nMisión: ${titulo}`);
    }
}

class Mago implements Aventurero {
    constructor(
        public readonly nombre: string
    ){};
    
    public recibirAviso(titulo: string){
        console.log(`[MAGO] ${this.nombre} ha sido convocado \nMisión: ${titulo}`);
    }
}

class Arquero implements Aventurero {
    constructor(
        public readonly nombre: string
    ){};
    
    public recibirAviso(titulo: string){
        console.log(`[ARQUERO] ${this.nombre} ha sido convocado \nMisión: ${titulo}`);
    }
}

// --- Cliente ---
const tablon = new TablonGremio();

tablon.registrarAventurero(new Guerrero('Arthur'));
tablon.registrarAventurero(new Mago('Victoria'));
tablon.registrarAventurero(new Arquero('Dalai'));

tablon.publicarMision('Llamar a Bum');
