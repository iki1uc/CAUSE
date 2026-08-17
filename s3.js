function WHIRL_START(pool) {
    // alle Module dürfen normal sein
    // aber wenn WHIRL startet → CAUSE = 3
    pool.causeLevel = 3;
    return "WHIRL läuft jetzt im CAUSE‑Modus (3)";
}
