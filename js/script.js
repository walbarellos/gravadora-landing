let songsData = [];
let artistsData = [];

// Carregar JSON
async function loadData() {
  try {
    const songsResponse = await fetch("data/songs.json");
    songsData = await songsResponse.json();

    const artistsResponse = await fetch("data/artists.json");
    artistsData = await artistsResponse.json();

    initializeApp();
  } catch (error) {
    console.error("Erro ao carregar dados:", error);
    loadFallbackData();
    initializeApp();
  }
}

// Fallback se JSON não existir
function loadFallbackData() {
  songsData = [
    {
      id: 1,
      title: "Exemplo de Música",
      artist: "Artista Demo",
      genre: "indie",
      audioUrl: "musicas/exemplo.mp3",
      albumArt: "", // sem capa
    },
  ];
  artistsData = [
    {
      id: 1,
      name: "Artista Demo",
      genre: "Indie",
      bio: "Este é um artista fictício apenas para fallback.",
      initials: "AD",
    },
  ];
}

// Inicializar app
function initializeApp() {
  renderSongs(songsData);
  renderArtists(artistsData);
  setupEventListeners();
  setupFeaturedTrack();
  setupNavigation();
  setupAudioPlayers();
}

// Renderizar músicas
function renderSongs(songs) {
  const musicGrid = document.getElementById("music-grid");
  musicGrid.innerHTML = "";

  songs.forEach((song, index) => {
    const songCard = createSongCard(song, index);
    musicGrid.appendChild(songCard);
  });
}

// Criar card de música (com capa como fundo)
function createSongCard(song, index) {
  const card = document.createElement("div");
  card.className = "song-card fade-in";
  card.dataset.genre = song.genre;

  const bgStyle = song.albumArt
    ? `style="background-image: url('${song.albumArt}');"`
    : `style="background: linear-gradient(135deg, #3a1c0f, #0f0704);"`;

  card.innerHTML = `
    <div class="song-image" ${bgStyle}>
      ${
        !song.albumArt
          ? `<span>♪</span>`
          : `<span class="song-overlay">${song.title}</span>`
      }
    </div>
    <div class="song-info">
      <h3>${song.title}</h3>
      <p class="artist">${song.artist}</p>
      <span class="genre">${song.genre}</span>
      <audio class="song-audio" controls preload="none">
        <source src="${song.audioUrl}" type="audio/mpeg">
        Seu navegador não suporta o player de áudio.
      </audio>
    </div>
  `;

  // delay incremental para animação de entrada
  card.style.animationDelay = `${index * 0.1}s`;

  return card;
}

// Renderizar artistas
function renderArtists(artists) {
  const artistsGrid = document.getElementById("artists-grid");
  artistsGrid.innerHTML = "";

  artists.forEach((artist, index) => {
    const artistCard = createArtistCard(artist, index);
    artistsGrid.appendChild(artistCard);
  });
}

// Criar card de artista
function createArtistCard(artist, index) {
  const card = document.createElement("div");
  card.className = "artist-card fade-in";
  card.style.animationDelay = `${index * 0.1}s`;

  card.innerHTML = `
    <div class="artist-image">
      <span>${artist.initials || "?"}</span>
    </div>
    <h3>${artist.name}</h3>
    <p class="genre">${artist.genre}</p>
    <p>${artist.bio}</p>
  `;

  return card;
}

// Eventos
function setupEventListeners() {
  // Filtros
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      filterSongs(button.dataset.filter);
    });
  });

  // Busca
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    searchSongs(e.target.value);
  });

  // Botão Hero CTA
  const ctaButton = document.querySelector(".cta-button");
  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    });
  }

  // Formulário de contato
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Obrigado pela mensagem! Em breve retornaremos.");
      contactForm.reset();
    });
  }
}

// Filtrar músicas
function filterSongs(filter) {
  const songCards = document.querySelectorAll(".song-card");
  songCards.forEach((card) => {
    card.style.display =
      filter === "all" || card.dataset.genre === filter ? "block" : "none";
  });
}

// Buscar músicas
function searchSongs(query) {
  const songCards = document.querySelectorAll(".song-card");
  const lowercaseQuery = query.toLowerCase();

  songCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const artist = card.querySelector(".artist").textContent.toLowerCase();

    card.style.display =
      title.includes(lowercaseQuery) || artist.includes(lowercaseQuery)
        ? "block"
        : "none";
  });
}

// Faixa em destaque
function setupFeaturedTrack() {
  if (songsData.length > 0) {
    const featuredSong = songsData[0];
    const trackTitle = document.querySelector(".track-title");
    const trackArtist = document.querySelector(".track-artist");
    const featuredAudio = document.getElementById("featured-audio");

    if (trackTitle && trackArtist && featuredAudio) {
      trackTitle.textContent = featuredSong.title;
      trackArtist.textContent = featuredSong.artist;
      featuredAudio.src = featuredSong.audioUrl;
    }
  }
}

// Navegação
function setupNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        navMenu.classList.remove("active");
      }
    });
  });

  // cor da navbar na rolagem
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(27, 15, 10, 0.95)";
      navbar.style.backdropFilter = "blur(10px)";
    } else {
      navbar.style.background = "rgba(20, 10, 5, 0.95)";
      navbar.style.backdropFilter = "none";
    }
  });
}

// Só um player tocando por vez
function setupAudioPlayers() {
  const audioElements = document.querySelectorAll("audio");
  audioElements.forEach((audio) => {
    audio.addEventListener("play", () => {
      audioElements.forEach((otherAudio) => {
        if (otherAudio !== audio) {
          otherAudio.pause();
        }
      });
    });
  });
}

// Iniciar app
document.addEventListener("DOMContentLoaded", loadData);
