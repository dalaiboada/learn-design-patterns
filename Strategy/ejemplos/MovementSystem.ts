interface EstrategiaMovimiento {
    moverse(nombrePersonaje: string): void;
}

class MovimientoPie implements EstrategiaMovimiento {
    public moverse(nombrePersonaje: string): void {
        console.log(`${nombrePersonaje} movimiéndose a pie`)
    } 
}

class MovimientoNadando implements EstrategiaMovimiento {
    public moverse(nombrePersonaje: string): void {
        console.log(`${nombrePersonaje} nadando`)
    } 
}

class MovimientoMontando implements EstrategiaMovimiento {
    public moverse(nombrePersonaje: string): void {
        console.log(`${nombrePersonaje} montando un caballo`)
    } 
}

class Viajero {
    constructor(
        private readonly nombre: string,
        private estrategia: EstrategiaMovimiento
    ){}

    public cambiarTerreno(nuevaEstrategia: EstrategiaMovimiento){
        console.log(`${this.nombre} ha cambiado de Terreno`)
        this.estrategia = nuevaEstrategia;
    }

    public viajar(){
        this.estrategia.moverse(this.nombre)
    }
}

const viajero = new Viajero('Victoria', new MovimientoPie())
viajero.viajar()

viajero.cambiarTerreno(new MovimientoNadando())
viajero.viajar()

viajero.cambiarTerreno(new MovimientoMontando())
viajero.viajar()
