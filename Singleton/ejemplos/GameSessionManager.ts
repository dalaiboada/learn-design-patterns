class GameSessionManager {
    // 1. Atributo estático privado que guarda la única instancia
    private static instancia: GameSessionManager;

    // 2. Constructor privado 
    private constructor(private servidor: string, private jugadoresConectados: number) {
        console.log(`[SERVIDOR] Conectado exitosamente a ${this.servidor}`);
    }

    // 3. Método estático público para obtener la única instancia
    public static obtenerInstancia(servidor: string = "US-East", jugadoresIniciales: number = 0): GameSessionManager {
        if (!GameSessionManager.instancia) {
            GameSessionManager.instancia = new GameSessionManager(servidor, jugadoresIniciales);
        } else {
            console.log(`[SERVIDOR] Ya hay una sesión activa. Reutilizando gestor existente...`);
        }
        return GameSessionManager.instancia;
    }

    // 4. Métodos de lógica de negocio
    public conectarJugador(nombreJugador: string): void {
        this.jugadoresConectados++;
        console.log(`El jugador ${nombreJugador} ha entrado. Total en línea: ${this.jugadoresConectados}`);
    }

    public obtenerTotalJugadores(): number {
        return this.jugadoresConectados;
    }
}

// --- PRUEBA DE USO EN EL JUEGO ---

// Intento erróneo (dará error de compilación):
// const sesionFalsa = new GameSessionManager("EU-West", 10); 

const sesionPrincipal = GameSessionManager.obtenerInstancia("US-East", 5);
sesionPrincipal.conectarJugador("Gandalf");

console.log("---");

// Intentamos crear otra sesión en otra parte del código con otros valores
const sesionSecundaria = GameSessionManager.obtenerInstancia("EU-West", 999);
sesionSecundaria.conectarJugador("Aragorn");

// Verificamos si ambas variables apuntan exactamente al mismo objeto
console.log(`¿Es exactamente la misma sesión en memoria?`, sesionPrincipal === sesionSecundaria); // true
console.log(`Total final de jugadores en el servidor:`, sesionPrincipal.obtenerTotalJugadores()); // 7
