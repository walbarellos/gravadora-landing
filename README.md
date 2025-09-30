## 📄 `README.md`

````markdown
# 🎶 Gravadora Oficial

Plataforma digital da **Gravadora Oficial**, com catálogo cultural e musical focado em **MPB, Samba, Bossa Nova e Música Popular Brasileira**.  
Site responsivo, elegante e funcional, feito para valorizar artistas e conectar público.

---

## 🚀 Funcionalidades

- 🎼 **Catálogo de músicas** dinâmico (busca e filtros por gênero).  
- 🎤 **Artistas** com perfil, gênero e descrição.  
- 📻 **Player integrado** (um áudio por vez).  
- 🎨 **Design artístico** com inspiração cultural.  
- 📱 **Layout responsivo** (desktop, tablet, mobile).  

---

## 📂 Estrutura do Projeto

```bash
gravadora-oficial/
├── index.html        # Página principal
├── css/styles.css    # Estilos (cores, animações, responsividade)
├── js/script.js      # Lógica do player, busca, filtros
├── data/songs.json   # Catálogo de músicas (dados dinâmicos)
├── data/artists.json # Dados de artistas
├── capas/            # Imagens de capas/álbuns
├── musicas/          # Arquivos MP3
````

---

## 🛠️ Como Rodar Localmente

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/gravadora-oficial.git
   cd gravadora-oficial
   ```

2. **Abra no navegador**:

   * Clique duas vezes no arquivo `index.html`
     ou
   * Use um servidor local:

     ```bash
     npx serve .
     ```

---

## 📌 Como Adicionar Novas Músicas

1. Coloque o arquivo `.mp3` dentro da pasta `musicas/`.
2. Coloque a capa (jpg/png) dentro da pasta `capas/`.
3. Edite `data/songs.json` e adicione um novo objeto:

   ```json
   {
     "id": 3,
     "title": "Nova Música",
     "artist": "Nome do Artista",
     "genre": "samba",
     "audioUrl": "musicas/nova-musica.mp3",
     "albumArt": "capas/nova-capa.jpg"
   }
   ```

---

## 📌 Como Adicionar Novos Artistas

1. Edite o arquivo `data/artists.json`.
2. Adicione um novo objeto:

   ```json
   {
     "id": 2,
     "name": "Novo Artista",
     "genre": "MPB",
     "bio": "Descrição breve sobre o artista.",
     "initials": "NA"
   }
   ```

---

## 🌍 Deploy (opcional)

* **GitHub Pages**:

  1. Vá em *Settings > Pages*.
  2. Escolha a branch `main` e pasta `/root`.
  3. Acesse pelo link: `https://seu-usuario.github.io/gravadora-oficial/`.

* **Netlify / Vercel**:
  Basta conectar o repositório e publicar automaticamente.

---

## 👨‍💻 Contribuição

1. Faça um **fork**.
2. Crie uma nova branch: `git checkout -b feature/nome-da-feature`.
3. Commit suas alterações: `git commit -m "feat: adiciona nova música"`.
4. Push: `git push origin feature/nome-da-feature`.
5. Abra um **Pull Request**.

---

## 📜 Licença

Distribuído sob licença **MIT**.
Veja o arquivo [`LICENSE`](LICENSE) para mais detalhes.

---

````

---

## 📄 `LICENSE` (MIT)
```text
MIT License

Copyright (c) 2025 Gravadora Oficial

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

O texto acima deve ser incluído em todas as cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA", SEM GARANTIAS DE QUALQUER TIPO,
EXPRESSAS OU IMPLÍCITAS.
````

---
