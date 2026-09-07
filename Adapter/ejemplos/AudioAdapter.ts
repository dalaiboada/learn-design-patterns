// 1. Interfaz Target que el motor de nuestro juego utiliza
interface MotorDeAudio {
    reproducirEfecto(): void;
}

// 2. El Adaptado: Una librería de audio heredada incompatible
class LegacyMotorDeAudio {
    public playOldFormat(soundId: number): void {
        console.log(`[Audio Retro] Reproduciendo pista heredada ID: ${soundId}`);
    }
}

// 3. El Adaptador que traduce la interfaz moderna al sistema retro
class LegacyAudioAdapter implements MotorDeAudio {
    private legacyEngine: LegacyMotorDeAudio;
    private soundId: number;

    constructor(legacyEngine: LegacyMotorDeAudio, soundId: number) {
        this.legacyEngine = legacyEngine;
        this.soundId = soundId;
    }

    public reproducirEfecto(): void {
        this.legacyEngine.playOldFormat(this.soundId);
    }
}

// 4. Código cliente que consume la interfaz estandarizada
const motorAntiguo = new LegacyMotorDeAudio();
const adaptadorAudio = new LegacyAudioAdapter(motorAntiguo, 42);

console.log("El personaje lanza un hechizo de fuego...");
adaptadorAudio.reproducirEfecto()
