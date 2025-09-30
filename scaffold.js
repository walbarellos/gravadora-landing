// scaffold.js
// Cria a estrutura da landing page e move os arquivos automaticamente

const fs = require("fs");
const path = require("path");

// Pastas da estrutura
const folders = {
  css: ["styles.css"],
  js: ["script.js"],
  musicas: [], // adicione manualmente seus .mp3
  capas: [],   // adicione manualmente suas imagens de capa
  data: ["songs.json", "artists.json"]
};

// Criar as pastas
Object.keys(folders).forEach(folder => {
  const folderPath = path.join(__dirname, folder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`✅ Pasta criada: ${folder}`);
  } else {
    console.log(`ℹ️ Pasta já existe: ${folder}`);
  }

  // Mover arquivos definidos
  folders[folder].forEach(file => {
    const src = path.join(__dirname, file);
    const dest = path.join(folderPath, file);

    if (fs.existsSync(src)) {
      try {
        fs.renameSync(src, dest);
        console.log(`📦 Movido: ${file} → ${folder}/`);
      } catch (err) {
        console.error(`❌ Erro ao mover ${file}:`, err.message);
      }
    } else {
      console.log(`⚠️ Arquivo não encontrado: ${file}`);
    }
  });
});

console.log("\n🎶 Estrutura organizada com sucesso!");
console.log("👉 Coloque seus arquivos .mp3 em /musicas e imagens em /capas.");

