import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statico: genera la cartella `out/` con soli HTML/CSS/JS,
  // caricabile su hosting PHP/Apache (LiteSpeed) senza Node.
  output: "export",
  // L'ottimizzazione immagini di default richiede un server: disattivarla per l'export.
  images: { unoptimized: true },
  // `/privacy` -> `/privacy/index.html`: servito nativamente da Apache/LiteSpeed.
  trailingSlash: true,
};

export default nextConfig;
