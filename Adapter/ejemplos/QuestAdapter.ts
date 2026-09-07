// Interfaz Target
interface MisionJuego {
    obtenerDescripcion(): string;
    estaCompletada(): boolean;
}

// El Adaptado
class ExternalQuestData {
    constructor(private title: string, private completed: boolean){}

    public getQuestTitle(): string {
        return `Misión de Expansión: ${this.title}`;
    }

    public isFinished(): boolean {
        return this.completed;
    }
}

// Adaptador
class ExternalQuestAdapter implements MisionJuego {
    constructor(
        private externalQuestData: ExternalQuestData 
    ){}

    public obtenerDescripcion(): string {
        return this.externalQuestData.getQuestTitle();
    }

    public estaCompletada(): boolean {
        return this.externalQuestData.isFinished();
    }
}

// --- Implementación ---
const misionExternaVieja = new ExternalQuestData("Invasión de Dragones", true);
const misionAdaptada = new ExternalQuestAdapter(misionExternaVieja);

console.log(misionAdaptada.obtenerDescripcion());
