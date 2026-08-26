// Lista de Ejemplo
const listaLogros: string[] = [
    'Despertar: Completa el prólogo y escapa del calabozo.',
    'El Fin del Primer Rey: Derrota al monarca corrupto en la capital.',
    'Salvador de Eldoria: Termina la campaña principal del juego.',
    'Primer Golpe: Derrota a tu primer enemigo en combate',
    'Torbellino de Acero: Conecta un combo de 100 golpes sin recibir daño.',
    'Maestro Elemental: Usa hechizos de Fuego, Hielo y Rayo en una misma pelea.',
    'Bienvenido al Valhalla: Muere por primera vez (un clásico logro irónico).'
]

class GestorLogros {
    private static instancia: GestorLogros;
    
    private constructor(
        private logrosDesbloqueados: string[] = []
    ){
        console.log("[SISTEMA] Inicializando el Gestor de Logros.");
    }

    public static obtenerInstancia(): GestorLogros {
        if (!GestorLogros.instancia) {
            GestorLogros.instancia = new GestorLogros();
        }
        return GestorLogros.instancia;
    }

    // Métodos de lógica de negocio
    public desbloquearLogro(nombreLogro: string): void {
        if(this.logrosDesbloqueados.includes(nombreLogro)){
            console.log(`[LOGRO]: "${nombreLogro}"`);
            return;
        }

        console.log(`[LOGRO DESBLOQUEADO]: "${nombreLogro}"`);
        this.logrosDesbloqueados.push(nombreLogro);
    }

    public mostrarlogros(): void {
        console.log(`--- Lista de Logros Desbloqueados ${this.logrosDesbloqueados.length}/${listaLogros.length} ---\n`);
        this.logrosDesbloqueados.forEach((logro, indice) => console.log(`${indice + 1}. ${logro}`));
    }
}

// --- Prueba de Uso ---
const gestorLogros = GestorLogros.obtenerInstancia();
gestorLogros.desbloquearLogro(listaLogros[2])

const gestorLogros2 = GestorLogros.obtenerInstancia()
gestorLogros2.desbloquearLogro(listaLogros[3])
gestorLogros2.desbloquearLogro(listaLogros[4])
gestorLogros2.desbloquearLogro(listaLogros[1])
gestorLogros2.desbloquearLogro(listaLogros[0])
gestorLogros2.desbloquearLogro(listaLogros[0])

gestorLogros.mostrarlogros()



