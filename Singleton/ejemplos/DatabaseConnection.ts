class BaseDeDatos {
    private static instancia: BaseDeDatos;

    private constructor(private urlConexion: string) {
        console.log(`[INFRAESTRUCTURA] Conectando a la base de datos en: ${this.urlConexion}`);
    }

    public static obtenerInstancia(url: string): BaseDeDatos {
        if (!BaseDeDatos.instancia) {
            BaseDeDatos.instancia = new BaseDeDatos(url);
        } else {
            console.log("[INFRAESTRUCTURA] Ya existía una conexión, reutilizando instancia...");
        }

        return BaseDeDatos.instancia;
    }

    public consultar(query: string): void {
        console.log(`Ejecutando query: "${query}" en ${this.urlConexion}`);
    }
}

// --- PRUEBA DE USO ---
const db1 = BaseDeDatos.obtenerInstancia("postgres://mi-servidor:5432/rwa");
db1.consultar("SELECT * FROM usuarios;");

console.log("---");

const db2 = BaseDeDatos.obtenerInstancia("postgres://otro-servidor:5432/otra");
db2.consultar("SELECT * FROM productos;");

// ¿Son exactamente el mismo objeto en memoria?
console.log("¿Son la misma instancia exactamente?", db1 === db2); // true
