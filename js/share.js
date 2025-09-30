// js/share.js

function shareSong(title, artist, audioUrl, albumArt) {
  const siteUrl = window.location.href;

  // fallback de imagem
  const image = albumArt && albumArt.trim() !== "" ? albumArt : "assets/share-preview.png";

  const shareText = `🎶 ${title} — ${artist}\nOuça agora: ${siteUrl}`;

  // Preferência: Web Share API (mobile e navegadores modernos)
  if (navigator.share) {
    navigator
      .share({
        title: `${title} — ${artist}`,
        text: shareText,
        url: siteUrl,
      })
      .catch((err) => console.error("Erro ao compartilhar:", err));
    return;
  }

  // Remove popup anterior se existir
  const existingPopup = document.querySelector(".share-popup");
  if (existingPopup) existingPopup.remove();

  // Cria popup customizado
  const popup = document.createElement("div");
  popup.className = "share-popup";
  popup.innerHTML = `
    <div class="share-popup-content">
      <h3>Compartilhar "${title}"</h3>
      <img src="${image}" alt="Prévia do álbum" class="share-preview"/>
      <p class="share-description">${artist}</p>
      <div class="share-buttons">
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}" target="_blank" title="Facebook">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}" target="_blank" title="Twitter / X">
          <i class="fab fa-x-twitter"></i>
        </a>
        <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}" target="_blank" title="WhatsApp">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}" target="_blank" title="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
      <button class="share-close">Fechar</button>
    </div>
  `;

  document.body.appendChild(popup);

  // Fecha ao clicar no botão
  popup.querySelector(".share-close").addEventListener("click", () => {
    popup.remove();
  });

  // Fecha ao clicar fora
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.remove();
  });
}

// Estilos injetados dinamicamente (se não estiver no CSS)
(function injectShareStyles() {
  if (document.getElementById("share-styles")) return;

  const style = document.createElement("style");
  style.id = "share-styles";
  style.innerHTML = `
    .share-popup {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      animation: fadeIn 0.3s ease;
    }
    .share-popup-content {
      background: var(--deep-brown, #1b0f0a);
      color: var(--cream, #f5f1e6);
      padding: 2rem;
      border-radius: 12px;
      max-width: 420px;
      width: 90%;
      text-align: center;
      box-shadow: 0 8px 30px rgba(0,0,0,0.5);
      animation: slideUp 0.3s ease;
    }
    .share-popup-content h3 {
      font-family: var(--font-secondary, serif);
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
      color: var(--warm-amber, #d9a441);
    }
    .share-preview {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 0.5rem 0 1rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    }
    .share-description {
      font-size: 0.95rem;
      opacity: 0.85;
      margin-bottom: 1rem;
    }
    .share-buttons {
      display: flex;
      justify-content: center;
      gap: 1.2rem;
      margin: 1rem 0 1.5rem;
    }
    .share-buttons a {
      font-size: 1.8rem;
      color: var(--warm-amber, #d9a441);
      transition: transform 0.2s, color 0.3s;
    }
    .share-buttons a:hover {
      transform: scale(1.2);
      color: var(--dark-amber, #a86c1d);
    }
    .share-close {
      background: var(--warm-amber, #d9a441);
      color: var(--deep-brown, #1b0f0a);
      border: none;
      padding: 0.6rem 1.5rem;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.3s;
    }
    .share-close:hover {
      background: var(--dark-amber, #a86c1d);
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
})();
