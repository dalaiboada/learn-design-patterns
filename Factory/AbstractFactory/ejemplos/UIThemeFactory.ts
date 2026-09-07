// --- Productos Abstractos ---
interface BotonUI {
    renderizarBoton(): void;
}

interface PanelUI {
    renderizarPanel(): void;
}

// --- Productos concretos ---
// Cyberpunk
class BotonNeon implements BotonUI {
    public renderizarBoton() {
        console.log("[Cyberpunk] Renderizando botón brillante con bordes de neón fucsia.");
    }
}

class PanelHolografico implements PanelUI {
    public renderizarPanel() {
        console.log("[Cyberpunk] Desplegando panel de datos flotante holográfico transparente.");
    }
}

// Fantasy
class BotonRicoMadera implements BotonUI {
    public renderizarBoton() {
        console.log('[Fantasy] Renderizando botón esculpido en madera noble y hierro forjado."');
    }
}

class PanelPergamino implements PanelUI {
    public renderizarPanel() {
        console.log('[Fantasy] Desplegando panel de inventario con textura de pergamino antiguo."');
    }
}

// --- Fábrica abstracta ---
interface UIThemeFactory {
    crearBoton(): BotonUI;
    crearPanel(): PanelUI;
}

// --- Fábricas Concretas ---
// Cyberpunk
class CyberpunkThemeFactory implements UIThemeFactory {
    public crearBoton(): BotonUI {
        return new BotonNeon();
    }

    public crearPanel(): PanelUI {
        return new PanelHolografico();
    }
}

// Fantasy
class FantasyThemeFactory implements UIThemeFactory {
    public crearBoton(): BotonUI {
        return new BotonRicoMadera();
    }

    public crearPanel(): PanelUI {
        return new PanelPergamino();
    }
}

// --- Código Cliente ---
const cyberpunkTheme = new CyberpunkThemeFactory();
const fantasyTheme = new CyberpunkThemeFactory();

const boton = cyberpunkTheme.crearBoton();
const panel = cyberpunkTheme.crearPanel();

boton.renderizarBoton();// Enter file content here
