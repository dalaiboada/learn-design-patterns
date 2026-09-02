// --- 1. Interfaz del Producto ---
interface ItemInventario {
  readonly nombre: string;
  readonly rareza: string;

  examinar(): void;
}

// --- 2. Productos Concretos ---
class Hierro implements ItemInventario {
  public readonly nombre = "Mineral de Hierro";
  public readonly rareza = "Común";

  examinar(): void {
    console.log(`Inspeccionando ${this.nombre} [${this.rareza}]: Útil para forjar herramientas básicas.`);
  }
}

class PocionMagica implements ItemInventario {
  public readonly nombre = "Poción de Maná Ancestral";
  public readonly rareza = "Épico";

  examinar(): void {
    console.log(`Inspeccionando ${this.nombre} [${this.rareza}]: Restaura el poder mágico del lanzador.`);
  }
}

class Espada implements ItemInventario {
  public readonly nombre = "Espada Larga de Acero";
  public readonly rareza = "Raro";

  examinar(): void {
    console.log(`Inspeccionando ${this.nombre} [${this.rareza}]: Arma equilibrada para el combate cuerpo a cuerpo.`);
  }
}

// --- 3. La Fábrica Simple ---
type TipoItem = "hierro" | "pocion" | "espada";

class ItemFactory {
  // Una única clase centralizada que decide qué objeto instanciar según el parámetro
  public static crearItem(tipo: TipoItem): ItemInventario {
    switch (tipo) {
      case "hierro":
        return new Hierro();

      case "pocion":
        return new PocionMagica();

      case "espada":
        return new Espada();
      default:
        throw new Error(`Tipo de ítem desconocido: ${tipo}`);
    }
  }
}

// --- 4. Código Cliente / Comprobación ---
function simularAperturaDeCofre(tipo: TipoItem) {
  console.log(`🔓 Abriendo cofre buscando un objeto tipo: "${tipo}"...`);
  
  // El cliente no usa 'new', le pide el objeto directamente a la Fábrica Simple
  const item = ItemFactory.crearItem(tipo);
  
  console.log(`¡Has obtenido: ${item.nombre}!`);
  item.examinar();
  console.log("--------------------------------------------------");
}

console.log("--- SIMULACIÓN DE INVENTARIO (SIMPLE FACTORY) ---");

simularAperturaDeCofre("hierro");
simularAperturaDeCofre("pocion");
simularAperturaDeCofre("espada");
