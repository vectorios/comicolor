// scripts/generateColors.js
const fs = require('fs');
const Color = require('color');

// --- Configuration ---
const TOTAL_COLORS = 10000;
const FREEBIE_PERCENTAGE = 0.05; // 5% of colors will be free

// --- Dictionnaires pour les noms poétiques ---
const prefixes = ['Azure', 'Crimson', 'Emerald', 'Golden', 'Obsidian', 'Silver', 'Ivory', 'Cosmic', 'Abyssal', 'Sunstone'];
const middles = ['Dawn', 'Dusk', 'Dream', 'Whisper', 'Glow', 'Shade', 'Heart', 'Flame', 'River', 'Sky'];
const suffixes = ['Mist', 'Bloom', 'Echo', 'Veil', 'Haze', 'Sorbet', 'Wash', 'Glory', 'Hue', 'Tint'];

// --- Fonctions Utilitaires ---

/**
 * Génère un nom poétique basé sur les propriétés HSL d'une couleur.
 * @param {Color} colorObj - Un objet de la librairie 'color'.
 * @returns {string} Un nom généré.
 */
function generatePoeticName(colorObj) {
  const [h, s, l] = colorObj.hsl().array();
  const pIndex = Math.floor((h / 360) * prefixes.length) % prefixes.length;
  const mIndex = Math.floor((s / 100) * middles.length) % middles.length;
  const suIndex = Math.floor((l / 100) * suffixes.length) % suffixes.length;
  return `${prefixes[pIndex]} ${middles[mIndex]} ${suffixes[suIndex]}`;
}

/**
 * Calcule un score d'influence.
 * Ici, on valorise les couleurs très saturées mais pas trop claires/foncées.
 * C'est une formule arbitraire que vous pouvez ajuster.
 * @param {Color} colorObj - Un objet de la librairie 'color'.
 * @returns {number} Un score de 0 à 1000.
 */
function calculateInfluenceScore(colorObj) {
  const [r, g, b] = colorObj.rgb().array();
  const saturation = colorObj.hsl().saturationl();
  const lightness = colorObj.hsl().lightness();

  // Pénaliser les couleurs trop proches du blanc ou du noir (les extrêmes de la luminosité)
  const lightnessPenalty = Math.abs(lightness - 50); // 0 at 50% lightness, 50 at extremes
  
  // Bonus pour la saturation
  const saturationBonus = saturation;

  // Bonus pour le contraste entre les canaux R, G, B (couleurs plus "vives")
  const contrast = Math.max(r,g,b) - Math.min(r,g,b);

  let score = (saturationBonus * 5) + (contrast * 2) - (lightnessPenalty * 4);
  
  // Normaliser le score entre 0 et 1000
  return Math.max(0, Math.min(1000, Math.round(score)));
}


// --- Script Principal ---

console.log('🚀 Starting color generation...');

const generatedColors = new Set();
const sqlInserts = [];
let freebiesCount = 0;
const totalFreebies = Math.floor(TOTAL_COLORS * FREEBIE_PERCENTAGE);

while (generatedColors.size < TOTAL_COLORS) {
  const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  
  if (!generatedColors.has(hex.substring(1))) {
    generatedColors.add(hex.substring(1));
    
    try {
      const colorObj = Color(hex);
      const name = generatePoeticName(colorObj);
      const score = calculateInfluenceScore(colorObj);
      
      let isFreebie = false;
      if (freebiesCount < totalFreebies && Math.random() < FREEBIE_PERCENTAGE * 1.5) { // un peu plus de chance pour atteindre le quota
        isFreebie = true;
        freebiesCount++;
      }
      
      // Formatter pour l'insertion SQL
      const hex_code = `'${hex.substring(1).toUpperCase()}'`;
      const color_name = `'${name.replace(/'/g, "''")}'`; // échapper les apostrophes
      const influence_score = score;
      const is_freebie_sql = isFreebie;
      
      sqlInserts.push(`(${hex_code}, ${color_name}, 'public_domain', NULL, ${influence_score}, ${is_freebie_sql})`);
    } catch (error) {
      // Ignorer les couleurs invalides si la librairie en rencontre
    }
  }
}

console.log(`✅ Generated ${generatedColors.size} unique colors.`);

const sqlHeader = `
-- ====================================================================
-- ColorVerse Public Domain Seed - ${new Date().toISOString()}
-- Total Colors: ${TOTAL_COLORS}
-- ====================================================================

INSERT INTO public.colors (hex_code, name, status, owner_id, influence_score, is_freebie) VALUES
`;

const sqlValues = sqlInserts.join(',\n');
const finalSql = sqlHeader + sqlValues + ';\n';

// Écrire le résultat dans un fichier
fs.writeFileSync('scripts/seed_colors.sql', finalSql);

console.log('✅ SQL seed file "seed_colors.sql" has been created in the /scripts folder.');
console.log('➡️ Next step: Copy the content of this file and run it in your Supabase SQL Editor.');