# Karl Kwon — Personal Website

[![Live Site](https://img.shields.io/badge/Live%20Site-kyeongan.github.io-blue?style=flat-square)](https://kyeongan.github.io)

Personal portfolio and resume site for **Karl Kwon, Ph.D.** (Kyeongan Kwon) — Lead Software Engineer & Computer Scientist specializing in data visualization, AI/ML applications, and scalable web systems.

## 🌐 Live

**https://kyeongan.github.io**

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Bootstrap 5](https://getbootstrap.com/) | CSS framework |
| [Font Awesome 6](https://fontawesome.com/) | Icons |
| [Google Fonts](https://fonts.google.com/) | Inter + JetBrains Mono |
| jQuery 3 | Smooth scrolling & scrollspy |
| Google Analytics | Site analytics |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Install dependencies

```bash
npm install
```

### Run local dev server

```bash
npm run dev
```

Opens at **http://localhost:3000** with hot module replacement enabled.

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

### Preview production build

```bash
npm run preview
```

---

## 📁 Project Structure

```
kyeongan.github.io/
├── index.html          # Main entry point
├── css/
│   ├── resume.css      # Primary stylesheet (CSS variables, layout)
│   └── style.css       # Supplemental styles (D3, legacy support)
├── js/
│   └── resume.js       # Smooth scrolling, responsive nav
├── partials/           # HTML fragments loaded dynamically
│   ├── about.html
│   ├── experience.html
│   ├── project.html
│   ├── publications.html
│   ├── talks.html
│   ├── committee.html
│   ├── awards.html
│   └── photos.html
├── img/                # Profile images and assets
├── resources/          # Project showcase media (images, GIFs, videos)
├── dist/               # Production build output (auto-generated)
└── vite.config.js      # Vite configuration
```

---

## 📄 License

Content and design © Karl Kwon. All rights reserved.

